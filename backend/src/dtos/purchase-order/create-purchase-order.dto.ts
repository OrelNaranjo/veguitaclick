import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreatePurchaseOrderDetailDto {
    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}

export class CreatePurchaseOrderDto {
    @IsNotEmpty()
    @IsNumber()
    orderNumber: number;

    @IsNotEmpty()
    @IsNumber()
    employeeId: number;

    @IsNotEmpty()
    @IsNumber()
    supplierId: number;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsDate()
    date: Date;

    @ValidateNested({ each: true })
    @Type(() => CreatePurchaseOrderDetailDto)
    orderDetails: CreatePurchaseOrderDetailDto[];
}