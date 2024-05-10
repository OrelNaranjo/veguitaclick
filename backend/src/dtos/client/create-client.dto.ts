import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateClientDto {
    @ApiProperty({example: '11.111.111-1'})
    @IsNotEmpty()
    @IsString()
    readonly rut: string;


    @ApiProperty({example: 'cliente'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({example: 'direccion 123'})
    @IsNotEmpty()
    @IsString()
    readonly address: string;

    @ApiProperty({example: 'cliente@cliente.cl'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '123456789'})
    @IsNotEmpty()
    @IsPhoneNumber('CL')
    readonly phone: string;
}
