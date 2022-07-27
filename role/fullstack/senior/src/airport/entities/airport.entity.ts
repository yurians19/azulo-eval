import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { priorityOrderAirport } from '../enum'
import { AiportOperator } from './aiportOperator.entity'
import { Location } from './location.entity'

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', nullable: false })
  name: string

  @Column({ type: 'text', nullable: false })
  airportCode: string

  @Column({
    type: "enum",
    name: "priorityOrder", 
    enum: priorityOrderAirport,
    default: priorityOrderAirport.SHORT
  })
  priorityOrder: priorityOrderAirport

  @OneToOne(() => Location)
  @JoinColumn({ name: 'locationId' })
  locationId: Location

  @OneToOne(() => AiportOperator)
  @JoinColumn({ name: 'airportOperatorId' })
  airportOperatorId: AiportOperator
}
