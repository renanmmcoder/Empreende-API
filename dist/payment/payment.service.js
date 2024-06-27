"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./payment.entity");
const account_service_1 = require("../account/account.service");
let PaymentService = class PaymentService {
    constructor(paymentRepository, accountService) {
        this.paymentRepository = paymentRepository;
        this.accountService = accountService;
    }
    async create(createPaymentDto) {
        if (createPaymentDto.amount == null || createPaymentDto.amount <= 0) {
            throw new common_1.BadRequestException('O valor do pagamento deve ser maior que zero e não pode ser nulo.');
        }
        const account = await this.accountService.findById(createPaymentDto.accountId);
        if (!account) {
            throw new common_1.NotFoundException('Conta não encontrada.');
        }
        const payment = new payment_entity_1.Payment();
        payment.amount = createPaymentDto.amount;
        payment.description = createPaymentDto.description;
        payment.date = createPaymentDto.date;
        payment.account = account;
        return await this.paymentRepository.save(payment);
    }
    async getTransactionReport(accountId, startDate, endDate) {
        const transactions = await this.paymentRepository.find({
            where: {
                account: { id: accountId },
                date: (0, typeorm_2.Between)(startDate.toISOString(), endDate.toISOString()),
            },
        });
        const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
        return { transactions, totalAmount };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        account_service_1.AccountService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map