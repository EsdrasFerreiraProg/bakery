import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type:string;

    @IsNotEmpty()
    @IsString()
    password:string;


}
