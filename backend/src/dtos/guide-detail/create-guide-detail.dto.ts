import { IsNotEmpty } from 'class-validator';

export class CreateGuideDetailDto {
    @IsNotEmpty()
    guideId: number;

    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    cost: number;
}