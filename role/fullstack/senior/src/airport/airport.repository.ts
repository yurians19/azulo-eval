import { Injectable } from '@nestjs/common'
import { In, Repository } from 'typeorm'
import { 
  Airport as AirportEntity,
  AiportOperator as AiportOperatorEntity
 } from './entities'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AirportRowRepository{
  constructor(
    @InjectRepository(AirportEntity)
    private airportRepository: Repository<AirportEntity>,
    @InjectRepository(AiportOperatorEntity)
    private AiportOperatorRepository: Repository<AiportOperatorEntity>,
  ) {}

  async getAiportOperatorById(AiportOperatorId): Promise<AiportOperatorEntity | null> {
    return this.AiportOperatorRepository.findOneBy({id : AiportOperatorId})
  }
  async updateAirportOperatorById({airportId,airportOperatorId}): Promise<any | null> {
    
    return this.airportRepository.update( { id: airportId }, { airportOperatorId })
  }

  async updateOrderPriorityByIds({airportIds,priorityOrder}): Promise<any | null> {
    console.log(airportIds,priorityOrder);
    return Promise.all(
      airportIds.map(async (airportId) => {
        return this.airportRepository.update( { id: airportId }, { priorityOrder})
      }),
    );
    
    return this.airportRepository.createQueryBuilder()
    .update(AirportEntity)
    .set({ priorityOrder: priorityOrder })
    .where({ id: In(airportIds) })
    .execute()
  }
}

