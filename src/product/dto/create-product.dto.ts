import { IsString, IsNumber, IsBoolean} from 'class-validator';


export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsNumber()
    price: number;

    @IsBoolean()
    available: boolean;

    @IsNumber()
    amount: number
}
