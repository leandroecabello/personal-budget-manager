import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Operation {
    id?: number;
    concept: string;
    amount: number;
    date: string;
    opType: string;
    category: string;
    userId: number;
}

export interface Balance {
    totalIncome: number;
    totalDischarge: number;
    balance: number;
}

