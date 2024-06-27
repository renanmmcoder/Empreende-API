import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { CreateAccountDto } from '../payment/dto/create-account.dto';
export declare class AccountService {
    private accountRepository;
    constructor(accountRepository: Repository<Account>);
    findById(accountId: number): Promise<Account | undefined>;
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    findOne(id: number): Promise<Account | undefined>;
}
