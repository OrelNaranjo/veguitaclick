import { ApiProperty } from '@nestjs/swagger';

export class CreateproductDto {
    @ApiProperty({ example: '1234567890' })
    readonly codigo_barra: string;

    @ApiProperty({ example: 'SKU123' })
    readonly sku: string;

    @ApiProperty({ example: 'product' })
    readonly nombre: string;

    @ApiProperty({ example: 'Descripción del product' })
    readonly descripion: string;

    @ApiProperty({ example: 100.0 })
    readonly precio: number;

    @ApiProperty({ example: false })
    readonly descontinuado: boolean;

    @ApiProperty({ example: true })
    readonly se_vende: boolean;

    @ApiProperty({ example: true })
    readonly se_compra: boolean;

    @ApiProperty({ example: 10 })
    readonly stock_minimo: number;

    @ApiProperty({ example: 100 })
    readonly stock_maximo: number;

    @ApiProperty({ example: 'Caja' })
    readonly embalaje: string;

    @ApiProperty({ example: 1.0 })
    readonly peso: number;

    @ApiProperty({ example: 10.0 })
    readonly ancho: number;

    @ApiProperty({ example: 10.0 })
    readonly alto: number;

    @ApiProperty({ example: 10.0 })
    readonly largo: number;
}