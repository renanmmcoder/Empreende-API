import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'KOcBJ2Ayo8ZyLN7EStiFuASl6xyHX65SBaX5',
      database: 'Banco',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'AHt7BIqJn62mftRdFtkvbjoJiXuCaHKA56Wk2bOx7SQjgzm3Y3',
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AccountModule,
    PaymentModule,
    AuthModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}