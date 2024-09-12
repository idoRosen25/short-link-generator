import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class HandleUrlBody {
  @ApiProperty({
    name: 'url',
    description: 'Either full or short link',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl({
    protocols: ['http', 'https'],
    require_protocol: true,
  })
  url: string;
}
