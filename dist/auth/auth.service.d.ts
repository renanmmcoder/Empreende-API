import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthService {
    private accountService;
    private jwtService;
    constructor(accountService: AccountService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<import("../account/account.entity").Account>;
    validateUser(loginUserDto: LoginUserDto): Promise<void>;
    login(user: any): Promise<void>;
}
