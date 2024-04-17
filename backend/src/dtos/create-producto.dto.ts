export class CreateProductoDto {
    readonly codigo_barra: string;
    readonly sku: string;
    readonly nombre: string;
    readonly descripion: string;
    readonly precio: number;
    readonly descontinuado: boolean;
    readonly se_vende: boolean;
    readonly se_compra: boolean;
    readonly stock_minimo: number;
    readonly stock_maximo: number;
    readonly embalaje: string;
    readonly peso: number;
    readonly ancho: number;
    readonly alto: number;
    readonly largo: number;
}