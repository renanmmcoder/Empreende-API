import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsNumber()
  @Min(0)
  readonly initialBalance: number;
}
