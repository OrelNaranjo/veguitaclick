import { Module } from '@nestjs/common';
import { SeederService } from '../services/seeder/seeder.service';
import { SeederController } from '../controllers/seeders/seeder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Roles } from '../entities/roles.entity';
import { Privileges } from '../entities/privileges.entity';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { PackageType } from '../entities/package-type.entity';
import { Supplier } from '../entities/supplier.entity';
import { Image } from '../entities/image.entity';
import { Employee } from '../entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    User,
    Roles,
    Privileges,
    Product,
    Image,
    Category,
    PackageType,
    Supplier,
    Employee,
  ])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule { }
