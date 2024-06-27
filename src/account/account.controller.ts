import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from '../payment/dto/create-account.dto';
import { Account } from './account.entity';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Account> {
    return this.accountService.findOne(id);
  }
}
