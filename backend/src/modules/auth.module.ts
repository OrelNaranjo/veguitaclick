import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controllers/auth/auth.controller';
import { Roles } from '../entities/roles.entity';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '60m' },
      }),
      TypeOrmModule.forFeature([User, Roles]),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService],
    exports: [JwtModule]
})
export class AuthModule {}
