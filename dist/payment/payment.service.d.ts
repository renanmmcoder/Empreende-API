import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AccountService } from '../account/account.service';
export declare class PaymentService {
    private paymentRepository;
    private accountService;
    constructor(paymentRepository: Repository<Payment>, accountService: AccountService);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    getTransactionReport(accountId: number, startDate: Date, endDate: Date): Promise<{
        transactions: Payment[];
        totalAmount: number;
    }>;
}
