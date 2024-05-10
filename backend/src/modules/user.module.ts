import { Module } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { UsersController } from '../controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Roles } from '../entities/roles.entity';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Roles]),
    AuthModule
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
