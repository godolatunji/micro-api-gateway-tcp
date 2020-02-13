import { ApiProperty } from "@nestjs/swagger";
import {
    IsOptional,
} from 'class-validator';
export class UserDto {
    @IsOptional()
    @ApiProperty()
    id?: number;

    @ApiProperty()
    name: string;
}
