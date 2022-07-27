import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm'

@Entity()
export class AiportOperator {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', nullable: false })
  name: string
}
