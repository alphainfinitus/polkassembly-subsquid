#!/bin/bash
# Script to wait for Kusama processor to pass the migration block before starting AssetHub processor

# Migration block on Kusama relay chain (when Referenda/ConvictionVoting moved to AssetHub)
KUSAMA_MIGRATION_BLOCK=${KUSAMA_MIGRATION_BLOCK:-30425590}

# Database connection details
DB_HOST=${DB_HOST:-db}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-squid}
DB_USER=${DB_USER:-postgres}
DB_PASS=${DB_PASS:-squid}

# Polling interval in seconds
POLL_INTERVAL=${POLL_INTERVAL:-30}

echo "=============================================="
echo "AssetHub Processor - Waiting for Kusama Migration"
echo "=============================================="
echo "Migration block: $KUSAMA_MIGRATION_BLOCK"
echo "Polling interval: ${POLL_INTERVAL}s"
echo ""

# Function to get Kusama processor's last processed block
get_kusama_block() {
    PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t -c \
        "SELECT COALESCE(height, 0) FROM kusama_processor.status WHERE id = 0;" 2>/dev/null | tr -d ' '
}

# Wait for database to be ready
echo "Waiting for database connection..."
until PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c '\q' 2>/dev/null; do
    echo "  Database not ready, waiting..."
    sleep 5
done
echo "Database connected!"
echo ""

# Wait for Kusama processor state schema to exist
echo "Waiting for Kusama processor to start..."
until PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "SELECT 1 FROM kusama_processor.status LIMIT 1;" 2>/dev/null; do
    echo "  Kusama processor not started yet, waiting..."
    sleep 10
done
echo "Kusama processor detected!"
echo ""

# Poll until Kusama passes the migration block
echo "Monitoring Kusama processor progress..."
while true; do
    CURRENT_BLOCK=$(get_kusama_block)
    
    if [ -z "$CURRENT_BLOCK" ] || [ "$CURRENT_BLOCK" = "" ]; then
        CURRENT_BLOCK=0
    fi
    
    PROGRESS=$(echo "scale=2; $CURRENT_BLOCK * 100 / $KUSAMA_MIGRATION_BLOCK" | bc 2>/dev/null || echo "0")
    
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Kusama at block $CURRENT_BLOCK / $KUSAMA_MIGRATION_BLOCK (${PROGRESS}%)"
    
    if [ "$CURRENT_BLOCK" -ge "$KUSAMA_MIGRATION_BLOCK" ]; then
        echo ""
        echo "=============================================="
        echo "Kusama processor has passed migration block!"
        echo "Starting AssetHub processor..."
        echo "=============================================="
        break
    fi
    
    sleep $POLL_INTERVAL
done

# Start AssetHub processor
exec npm run processor:start:assethub

