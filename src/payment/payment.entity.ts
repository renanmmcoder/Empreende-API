import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Account } from '../account/account.entity';
import { IsNotEmpty, IsPositive } from 'class-validator';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, account => account.id)
  account: Account;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsPositive()
  amount: number;

  @Column()
  @IsNotEmpty()
  date: string;

  @Column()
  @IsNotEmpty()
  description: string;
}
