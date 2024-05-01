import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ example: '1234567890' })
    readonly barcode: string;

    @ApiProperty({ example: 'SKU123' })
    readonly sku: string;

    @ApiProperty({ example: 'product' })
    readonly name: string;

    @ApiProperty({ example: 'Descripción del producto' })
    readonly description: string;

    @ApiProperty({ example: 100.0 })
    readonly price: number;

    @ApiProperty({ example: 90.0 })
    readonly cost: number;

    @ApiProperty({ example: false })
    readonly discontinued: boolean;

    @ApiProperty({ example: true })
    readonly is_selleable: boolean;

    @ApiProperty({ example: true })
    readonly is_purchase: boolean;

    @ApiProperty({ example: 10 })
    readonly min_stock: number;

    @ApiProperty({ example: 100 })
    readonly max_stock: number;

    @ApiProperty({ example: 1.0 })
    readonly weight: number;

    @ApiProperty({ example: 10.0 })
    readonly width: number;

    @ApiProperty({ example: 10.0 })
    readonly height: number;

    @ApiProperty({ example: 10.0 })
    readonly length: number;

    @ApiProperty({ example: 1 })
    readonly categoryId: number;

    @ApiProperty({ example: 1, required: false })
    readonly imageId: number;
}