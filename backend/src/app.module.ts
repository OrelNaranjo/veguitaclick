import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// Importar Modulos
import { ProductModule } from './modules/product.module';
import { CategoryModule } from './modules/category.module';
import { ImageModule } from './modules/image.module';
import { PackageTypeModule } from './modules/package-type.module';
import { SupplierModule } from './modules/supplier.module';
import { ClientModule } from './modules/client.module';
import { UserModule } from './modules/user.module';
import { PrivilegeModule } from './modules/privilege.module';
import { RoleModule } from './modules/role.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    ProductModule,
    CategoryModule,
    ImageModule,
    PackageTypeModule,
    SupplierModule,
    ClientModule,
    UserModule,
    PrivilegeModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
