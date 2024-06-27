import { AccountService } from './account.service';
import { CreateAccountDto } from '../payment/dto/create-account.dto';
import { Account } from './account.entity';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    findOne(id: number): Promise<Account>;
}
