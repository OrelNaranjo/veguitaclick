import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { Roles } from 'src/entities/roles.entity';
import { Users } from 'src/entities/users.entity';
import { AuthService } from 'src/services/auth/auth.service';
import { UserService } from 'src/services/user/user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '60m' },
      }),
      TypeOrmModule.forFeature([Users, Roles]),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService],
    exports: [JwtModule]
})
export class AuthModule {}
