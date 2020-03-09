import { ApiPropertyOptional } from '@nestjs/swagger';
import { ContactDto } from './contact.dto';

export class ContactListDto {
  @ApiPropertyOptional()
  list: ContactDto[];

  @ApiPropertyOptional()
  count: number;
}
