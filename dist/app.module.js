"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const account_module_1 = require("./account/account.module");
const payment_module_1 = require("./payment/payment.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_strategy_1 = require("./auth/strategies/jwt.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'KOcBJ2Ayo8ZyLN7EStiFuASl6xyHX65SBaX5',
                database: 'Banco',
                autoLoadEntities: true,
                synchronize: true,
            }),
            jwt_1.JwtModule.register({
                secret: 'AHt7BIqJn62mftRdFtkvbjoJiXuCaHKA56Wk2bOx7SQjgzm3Y3',
                signOptions: { expiresIn: '1h' },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            account_module_1.AccountModule,
            payment_module_1.PaymentModule,
            auth_module_1.AuthModule,
        ],
        providers: [jwt_strategy_1.JwtStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map