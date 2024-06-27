import { Account } from '../account/account.entity';
export declare class Payment {
    id: number;
    account: Account;
    amount: number;
    date: string;
    description: string;
}
