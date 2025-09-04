// Fellowship track configurations for Polkadot Collectives
// Based on Polkadot-JS and Polkadot-API implementations

export interface CurveConfig {
  type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal'
  value: LinearDecreasingConfig | SteppedDecreasingConfig | ReciprocalConfig
}

export interface LinearDecreasingConfig {
  ceil: bigint
  floor: bigint
  length: bigint
}

export interface SteppedDecreasingConfig {
  begin: bigint
  end: bigint
  period: bigint
  step: bigint
}

export interface ReciprocalConfig {
  factor: bigint
  xOffset: bigint
  yOffset: bigint
}

export interface TrackConfig {
  id: number
  name: string
  minApproval: CurveConfig
  minSupport: CurveConfig
  decisionPeriod: bigint
  confirmPeriod: bigint
  minEnactmentPeriod: bigint
  maxDeciding: number
  decisionDeposit: bigint
  preparePeriod: bigint
}

// Fellowship and Ambassador track configurations based on actual Polkadot Collectives data
export const FELLOWSHIP_TRACKS: Record<number, TrackConfig> = {
  // Fellowship tracks (1-9)
  1: {
    id: 1,
    name: 'Members',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000') // 100%
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000') // 100%
      }
    },
    decisionPeriod: BigInt(50400), // blocks
    confirmPeriod: BigInt(150), // blocks
    minEnactmentPeriod: BigInt(25), // blocks
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'), // 5 DOT
    preparePeriod: BigInt(150) // blocks
  },
  2: {
    id: 2,
    name: 'Proficient Members',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  3: {
    id: 3,
    name: 'Fellows',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  4: {
    id: 4,
    name: 'Architects',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  5: {
    id: 5,
    name: 'Architects Adept',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  6: {
    id: 6,
    name: 'Grand Architects',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  7: {
    id: 7,
    name: 'Masters',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  8: {
    id: 8,
    name: 'Masters Constant',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },
  9: {
    id: 9,
    name: 'Grand Masters',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(150),
    minEnactmentPeriod: BigInt(25),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(150)
  },

  // Fellowship retention tracks (11-16)
  11: {
    id: 11,
    name: 'Retain at I Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  12: {
    id: 12,
    name: 'Retain at II Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  13: {
    id: 13,
    name: 'Retain at III Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  14: {
    id: 14,
    name: 'Retain at IV Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  15: {
    id: 15,
    name: 'Retain at V Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  16: {
    id: 16,
    name: 'Retain at VI Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(100800),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 25,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },

  // Fellowship promotion tracks (21-26)
  21: {
    id: 21,
    name: 'Promote to I Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  22: {
    id: 22,
    name: 'Promote to II Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  23: {
    id: 23,
    name: 'Promote to III Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  24: {
    id: 24,
    name: 'Promote to IV Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  25: {
    id: 25,
    name: 'Promote to V Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  26: {
    id: 26,
    name: 'Promote to VI Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('600000000'), // 60%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('100000000'), // 10%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },

  // Fellowship fast promotion tracks (31-33)
  31: {
    id: 31,
    name: 'Fast Promote to I Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('660000000'), // 66%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  32: {
    id: 32,
    name: 'Fast Promote to II Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('660000000'), // 66%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  },
  33: {
    id: 33,
    name: 'Fast Promote to III Dan',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('660000000'), // 66%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(216000),
    confirmPeriod: BigInt(300),
    minEnactmentPeriod: BigInt(0),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(0)
  }
}

// Ambassador track configurations
export const AMBASSADOR_TRACKS: Record<number, TrackConfig> = {
  1: {
    id: 1,
    name: 'Ambassador',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('500000000'), // 50%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(7200),
    minEnactmentPeriod: BigInt(300),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(7200)
  },
  2: {
    id: 2,
    name: 'Senior Ambassador',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('500000000'), // 50%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(7200),
    minEnactmentPeriod: BigInt(300),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(7200)
  },
  3: {
    id: 3,
    name: 'Head Ambassador',
    minApproval: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('1000000000'), // 100%
        floor: BigInt('500000000'), // 50%
        length: BigInt('1000000000')
      }
    },
    minSupport: {
      type: 'LinearDecreasing',
      value: {
        ceil: BigInt('500000000'), // 50%
        floor: BigInt('0'), // 0%
        length: BigInt('1000000000')
      }
    },
    decisionPeriod: BigInt(50400),
    confirmPeriod: BigInt(7200),
    minEnactmentPeriod: BigInt(300),
    maxDeciding: 10,
    decisionDeposit: BigInt('50000000000'),
    preparePeriod: BigInt(7200)
  }
}

export function getTrackConfig(trackId: number): TrackConfig | undefined {
  // Try Fellowship tracks first
  const fellowshipTrack = FELLOWSHIP_TRACKS[trackId]
  if (fellowshipTrack) {
    return fellowshipTrack
  }

  // Then try Ambassador tracks
  const ambassadorTrack = AMBASSADOR_TRACKS[trackId]
  if (ambassadorTrack) {
    return ambassadorTrack
  }

  return undefined
}
