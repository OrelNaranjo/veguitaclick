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
import { AuthModule } from './modules/auth.module';
import { SeederModule } from './modules/seeder.module';
import { AppController } from './app.controller';
import { AuthGuard } from './guards/auth/auth.guard';
import { StoreModule } from './modules/store.module';
import { WarehousesModule } from './modules/warehouses.module';
import { InventoriesModule } from './modules/inventories.module';
import { TicketsModule } from './modules/tickets.module';
import { GuidesModule } from './modules/guides.module';
import { VehiclesModule } from './modules/vehicles.module';
import { EmployeesModule } from './modules/employees.module';
import { PaymentsModule } from './modules/payments.module';
import { PaymentMethodsModule } from './modules/payment-methods.module';
import { PaymentDetailsModule } from './modules/payment-details.module';
import { PurchaseOrdersModule } from './modules/purchase-orders.module';


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
    AuthModule,
    SeederModule,
    StoreModule,
    WarehousesModule,
    InventoriesModule,
    TicketsModule,
    GuidesModule,
    VehiclesModule,
    EmployeesModule,
    PurchaseOrdersModule,
    PaymentsModule,
    PaymentMethodsModule,
    PaymentDetailsModule,
  ],
  controllers: [AppController],
  providers: [AuthGuard],
})
export class AppModule {}
