// FIX: Import `ReactNode` to resolve 'Cannot find namespace "React"' error.
import type { ReactNode } from 'react';

export type GameCategory = 'popular' | 'lottery' | 'slots' | 'kerala' | 'casino' | 'rummy' | 'original' | 'fishing' | 'sports';

export interface Game {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  category: GameCategory;
  jackpot?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface LeaderboardEntry {
  rank: number;
  avatarUrl: string;
  name: string;
  earnings: string;
}

export interface WinningEntry {
  avatarUrl: string;
  name: string;
  gameName: string;
  gameImageUrl: string;
  amount: string;
}