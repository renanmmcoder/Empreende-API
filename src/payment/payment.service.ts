import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AccountService } from '../account/account.service';
import { Account } from '../account/account.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    private accountService: AccountService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    if (createPaymentDto.amount == null || createPaymentDto.amount <= 0) {
      throw new BadRequestException('O valor do pagamento deve ser maior que zero e não pode ser nulo.');
    }

    const account: Account | null = await this.accountService.findById(createPaymentDto.accountId);
    if (!account) {
      throw new NotFoundException('Conta não encontrada.');
    }

    const payment = new Payment();
    payment.amount = createPaymentDto.amount;
    payment.description = createPaymentDto.description;
    payment.date = createPaymentDto.date;
    payment.account = account;

    return await this.paymentRepository.save(payment);
  }

  async getTransactionReport(accountId: number, startDate: Date, endDate: Date): Promise<{ transactions: Payment[], totalAmount: number }> {
    const transactions = await this.paymentRepository.find({
      where: {
        account: { id: accountId },
        date: Between(startDate.toISOString(), endDate.toISOString()),
      },
    });

    const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    return { transactions, totalAmount };
  }
}
