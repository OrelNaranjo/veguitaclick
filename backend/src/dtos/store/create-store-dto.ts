import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateStoreDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone: string;
}