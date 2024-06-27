import { IsNotEmpty, IsPositive, IsDateString } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  accountId: number;

  @IsPositive()
  amount: number;

  @IsDateString()
  date: string;

  @IsNotEmpty()
  description: string;
}
