import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateSupplierDto {
    @ApiProperty({example: '11.111.111-1'})
    @IsNotEmpty()
    @IsString()
    readonly rut: string;
    

    @ApiProperty({example: 'provedor'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({example: 'direccion1'})
    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @ApiProperty({example: 'provedor@provedor.cl'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '123456789'})
    @IsNotEmpty()
    @IsPhoneNumber('any')
    readonly phone: string;
}
