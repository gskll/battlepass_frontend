export interface BattlePassOverview {
  id: string
  name: string
  status: string
  start_date: string
  end_date: string
}

export interface BattlePass {
  id: string
  name: string
  description: string
  status: string
  start_date: string
  end_date: string
  experience: string
  tiers: Tier[]
  missions: Mission[]
  rewards: Reward[]
}

export interface Tier {
  id: string
  name: string
  price: string
  levels: Level[]
}

export interface Level {
  id: string
  name: string
  reward: Reward[]
}

export interface Reward {
  id: string
  name: string
  description: string
  type: string
  rarity: string
}

export interface Mission {
  id: string
  name: string
  description: string
  type: string
  goal_type: string
  battlepass?: BattlePass
}
