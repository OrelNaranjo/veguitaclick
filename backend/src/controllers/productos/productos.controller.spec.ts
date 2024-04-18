import { Test, TestingModule } from '@nestjs/testing';
import { ProductosController } from './productos.controller';
import { ProductoService } from '../../services/producto/producto.service';
import { CreateProductoDto } from '../../dtos/create-producto.dto';
import { Producto } from '../../entities/producto.entity';
import { UpdateProductoDto } from '../../dtos/update-producto.dto';

describe('ProductosController', () => {
  let controller: ProductosController;
  let service: ProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosController],
      providers: [
        {
          provide: ProductoService,
          useValue: {
            create: jest.fn().mockResolvedValue(new Producto()),
            findAll: jest.fn().mockResolvedValue([new Producto()]),
            findOne: jest.fn().mockResolvedValue(new Producto()),
            update: jest.fn().mockResolvedValue(new Producto()),
            remove: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductosController>(ProductosController);
    service = module.get<ProductoService>(ProductoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a producto', async () => {
    const dto: CreateProductoDto = {
      codigo_barra: '123456',
      sku: 'sku123',
      nombre: 'Test',
      descripion: 'Test description',
      precio: 100,
      descontinuado: false,
      se_vende: true,
      se_compra: true,
      stock_minimo: 10,
      stock_maximo: 50,
      embalaje: 'box',
      peso: 1,
      ancho: 10,
      alto: 10,
      largo: 10,
    };
    const result = await controller.create(dto);
    expect(result).toBeInstanceOf(Producto);
  });

  it('should return all productos', async () => {
    const result = await controller.findAll();
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Producto);
  });

  it('should return one producto', async () => {
    const id = '1';
    const result = await controller.findOne(id);
    expect(result).toBeInstanceOf(Producto);
  });

  it('should update a producto', async () => {
    const id = '1';
    const dto: UpdateProductoDto = { nombre: 'Test Updated' };
    const result = await controller.update(id, dto);
    expect(result).toBeInstanceOf(Producto);
  });

  it('should remove a producto', async () => {
    const id = '1';
    const result = await controller.remove(id);
    expect(result).toEqual({ affected: 1 });
  });
});