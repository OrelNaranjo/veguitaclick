import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiPropertyOptional({ example: '1234567890' })
    readonly barcode?: string;

    @ApiPropertyOptional({ example: 'SKU123' })
    readonly sku?: string;

    @ApiPropertyOptional({ example: 'product' })
    readonly name?: string;

    @ApiPropertyOptional({ example: 'Product description' })
    readonly description?: string;

    @ApiPropertyOptional({ example: 100.0 })
    readonly price?: number;

    @ApiPropertyOptional({ example: 90.0 })
    readonly cost?: number;

    @ApiPropertyOptional({ example: false })
    readonly discontinued?: boolean;

    @ApiPropertyOptional({ example: true })
    readonly is_selleable?: boolean;

    @ApiPropertyOptional({ example: true })
    readonly is_purchase?: boolean;

    @ApiPropertyOptional({ example: 10 })
    readonly min_stock?: number;

    @ApiPropertyOptional({ example: 100 })
    readonly max_stock?: number;

    @ApiPropertyOptional({ example: 1.0 })
    readonly weight?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly width?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly height?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly length?: number;

    @ApiPropertyOptional({ example: 1, required: false })
    readonly categoryId?: number;

    @ApiPropertyOptional({ example: 1, required: false })
    readonly imageId?: number;
}