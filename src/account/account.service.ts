import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity'; // Verifique o caminho correto para a entidade Account
import { CreateAccountDto } from '../payment/dto/create-account.dto'; // Verifique o caminho correto para o DTO CreateAccountDto

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async findById(accountId: number): Promise<Account | undefined> {
    return await this.accountRepository.findOne({ where: { id: accountId } });
  }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = this.accountRepository.create(createAccountDto);
    return await this.accountRepository.save(account);
  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepository.find();
  }

  async findOne(id: number): Promise<Account | undefined> {
    return await this.accountRepository.findOneBy({ id: id});
  }
}
