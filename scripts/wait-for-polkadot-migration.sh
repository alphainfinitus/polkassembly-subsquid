#!/bin/bash
# wait-for-polkadot-migration.sh
# This script waits for the Polkadot processor to sync past the migration block
# before starting the AssetHub processor. This ensures that referenda migrated
# from the relay chain are properly indexed before AssetHub processes votes on them.

set -e

# Configuration
MIGRATION_BLOCK=${POLKADOT_MIGRATION_BLOCK:-28495696}
POLL_INTERVAL=${POLL_INTERVAL:-30}  # seconds between checks

# Database connection
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_NAME=${DB_NAME:-squid}
DB_USER=${DB_USER:-postgres}
DB_PASS=${DB_PASS:-squid}

echo "=============================================="
echo "AssetHub Processor - Waiting for Polkadot Migration"
echo "=============================================="
echo "Migration block: $MIGRATION_BLOCK"
echo "Polling interval: ${POLL_INTERVAL}s"
echo ""

# Function to get Polkadot processor's last processed block
get_polkadot_block() {
    PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t -c \
        "SELECT COALESCE(height, 0) FROM polkadot_processor.status WHERE id = 0;" 2>/dev/null | tr -d ' '
}

# Wait for database to be ready
echo "Waiting for database connection..."
until PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "SELECT 1" > /dev/null 2>&1; do
    sleep 2
done
echo "Database connected!"
echo ""

# Wait for Polkadot processor to start (schema creation)
echo "Waiting for Polkadot processor to start..."
until PGPASSWORD=$DB_PASS psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "SELECT 1 FROM polkadot_processor.status LIMIT 1" > /dev/null 2>&1; do
    echo "  Polkadot processor not started yet, waiting..."
    sleep $POLL_INTERVAL
done
echo "Polkadot processor detected!"
echo ""

# Wait for Polkadot to pass migration block
echo "Monitoring Polkadot processor progress..."
while true; do
    CURRENT_BLOCK=$(get_polkadot_block)
    
    if [ -z "$CURRENT_BLOCK" ] || [ "$CURRENT_BLOCK" = "" ]; then
        CURRENT_BLOCK=0
    fi
    
    PERCENT=$(echo "scale=2; $CURRENT_BLOCK * 100 / $MIGRATION_BLOCK" | bc 2>/dev/null || echo "0")
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Polkadot at block $CURRENT_BLOCK / $MIGRATION_BLOCK (${PERCENT}%)"
    
    if [ "$CURRENT_BLOCK" -ge "$MIGRATION_BLOCK" ]; then
        echo ""
        echo "=============================================="
        echo "Polkadot processor has passed migration block!"
        echo "Starting AssetHub processor..."
        echo "=============================================="
        break
    fi
    
    sleep $POLL_INTERVAL
done

# Start the AssetHub processor
exec npm run processor:start:assethub

