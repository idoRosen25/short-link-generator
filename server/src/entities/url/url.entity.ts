import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('link')
export class Link {
  @PrimaryColumn({
    type: 'varchar',
    name: 'short_link',
  })
  shortLink: string;

  @Column({
    type: 'varchar',
    name: 'original_link',
  })
  originalLink: string;
}
