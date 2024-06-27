import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsPositive, IsIn } from 'class-validator';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsIn(['corrente', 'poupança'])
  accountType: string;

  @Column('decimal', { default: 0 })
  @IsPositive()
  initialBalance: number;
}
