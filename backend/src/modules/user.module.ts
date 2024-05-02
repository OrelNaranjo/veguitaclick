import { Module } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { UsersController } from '../controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Roles } from 'src/entities/roles.entity';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Roles]),
    AuthModule
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
