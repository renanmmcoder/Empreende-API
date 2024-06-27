import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

@Controller('payments')
export class PaymentController {
  paymentService: any;

  @Get('report/:accountId')
  async getTransactionReport(
    @Param('accountId') accountId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const report = await this.paymentService.getTransactionReport(
      accountId,
      new Date(startDate),
      new Date(endDate),
    );
    return report;
  }

}
