import { ApiPropertyOptional } from '@nestjs/swagger';
import { CarDto } from './car.dto';

export class CarArrayResponseDto {
  @ApiPropertyOptional({ type: CarDto })
  data: CarDto[];

  @ApiPropertyOptional()
  status: boolean;

  @ApiPropertyOptional()
  message: string;
}
