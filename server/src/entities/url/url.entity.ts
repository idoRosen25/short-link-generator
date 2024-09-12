import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('link')
export class Link {
  @ApiProperty()
  @PrimaryColumn({
    type: 'varchar',
    name: 'short_link',
  })
  shortLink: string;

  @ApiProperty()
  @Column({
    type: 'varchar',
    name: 'original_link',
  })
  originalLink: string;
}
