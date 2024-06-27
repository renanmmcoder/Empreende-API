import { IsNotEmpty, IsIn, IsPositive } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  name: string;

  @IsIn(['corrente', 'poupança'])
  type: string;

  @IsPositive()
  initialBalance: number;
}
