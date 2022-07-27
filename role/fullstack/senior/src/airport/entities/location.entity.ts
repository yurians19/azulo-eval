import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm'

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', nullable: false })
  country: string

  @Column({ type: 'text', nullable: false })
  provinceOrState: string

  @Column({ type: 'text', nullable: true })
  longitude: string

  @Column({ type: 'text', nullable: true })
  latitude: number
}
