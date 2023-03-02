import { IsNotEmpty } from "class-validator";
import { IsNumber, IsString } from "class-validator/types/decorator/decorators";



export class Book{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsString()
    author:string;

    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsNumber()
    year:number
}