import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateproductDto {
    @ApiPropertyOptional({ example: '1234567890' })
    readonly codigo_barra?: string;

    @ApiPropertyOptional({ example: 'SKU123' })
    readonly sku?: string;

    @ApiPropertyOptional({ example: 'product' })
    readonly nombre?: string;

    @ApiPropertyOptional({ example: 'Descripción del product' })
    readonly descripion?: string;

    @ApiPropertyOptional({ example: 100.0 })
    readonly precio?: number;

    @ApiPropertyOptional({ example: false })
    readonly descontinuado?: boolean;

    @ApiPropertyOptional({ example: true })
    readonly se_vende?: boolean;

    @ApiPropertyOptional({ example: true })
    readonly se_compra?: boolean;

    @ApiPropertyOptional({ example: 10 })
    readonly stock_minimo?: number;

    @ApiPropertyOptional({ example: 100 })
    readonly stock_maximo?: number;

    @ApiPropertyOptional({ example: 'Caja' })
    readonly embalaje?: string;

    @ApiPropertyOptional({ example: 1.0 })
    readonly peso?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly ancho?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly alto?: number;

    @ApiPropertyOptional({ example: 10.0 })
    readonly largo?: number;
}