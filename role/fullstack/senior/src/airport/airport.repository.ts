import { Injectable } from '@nestjs/common'
import { In, Repository } from 'typeorm'
import { 
  Airport as AirportEntity,
 } from './entities'
import { InjectRepository } from '@nestjs/typeorm'
import { IUpdatePriorityOrderMany } from './interfaces'

@Injectable()
export class AirportRowRepository{
  constructor(
    @InjectRepository(AirportEntity)
    private airportRepository: Repository<AirportEntity>,
  ) {}

  async updateAirportOperatorById({airportId,airportOperatorId}): Promise<any | null> {
    
    return this.airportRepository.update( { id: airportId }, { airportOperatorId })
  }

  async updateOrderPriorityByIds({airportIds,priorityOrder}: IUpdatePriorityOrderMany): Promise<any | null> {
    return this.airportRepository.createQueryBuilder()
    .update(AirportEntity)
    .set({ priorityOrder: priorityOrder })
    .where({ id: In(airportIds) })
    .execute()
  }
}

