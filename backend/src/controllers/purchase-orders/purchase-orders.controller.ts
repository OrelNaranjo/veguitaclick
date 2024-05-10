import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PurchaseOrdersService } from '../../services/purchase-orders/purchase-orders.service';
import { CreatePurchaseOrderDto } from '../../dtos/purchase-order/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from '../../dtos/purchase-order/update-purchase-order.dto';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { GetPrivileges } from '../../decorators/app.decorator';


@UseGuards(AuthGuard)
@Controller('purchase-orders')
@ApiTags('Ordenes de Compra')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  create(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchaseOrdersService.create(createPurchaseOrderDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.purchaseOrdersService.update(+id, updatePurchaseOrderDto);
  }

  @GetPrivileges('delete_order')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.remove(+id);
  }
}
