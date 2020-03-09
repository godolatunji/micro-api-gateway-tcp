import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class UserDto {
  @IsOptional()
  @ApiPropertyOptional()
  id?: number;

  @ApiPropertyOptional()
  name: string;
}
