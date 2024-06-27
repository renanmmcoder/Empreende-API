import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateAccountDto } from './dto/create-account.dto'; 
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const createAccountDto: CreateAccountDto = {
      name: createUserDto.username,
      type: 'checking', 
      initialBalance: 0,
    };

    return await this.accountService.create(createAccountDto);
  }

  async validateUser(loginUserDto: LoginUserDto) {
  }

  async login(user: any) {
  }
}
