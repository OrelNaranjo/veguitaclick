export interface Product {
  codigo_barra: string;
  sku: string;
  nombre: string;
  descripion: string;
  precio: number;
  descontinuado: boolean;
  se_vende: boolean;
  se_compra: boolean;
  stock_minimo: number;
  stock_maximo: number;
  embalaje: string;
  peso: number;
  ancho: number;
  alto: number;
  largo: number;
}