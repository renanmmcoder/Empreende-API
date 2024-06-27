import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'AHt7BIqJn62mftRdFtkvbjoJiXuCaHKA56Wk2bOx7SQjgzm3Y3t3y',
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
    AccountModule, 
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
