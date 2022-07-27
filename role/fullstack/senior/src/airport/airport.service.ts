import { Injectable } from '@nestjs/common';
import { AirportRowRepository } from './airport.repository';

@Injectable()
export class AirportService {
  constructor(
    private readonly airportRowRepository: AirportRowRepository,
  ) {}

  async updateAirportOperatorById(query): Promise<any> {
    return this.airportRowRepository.updateAirportOperatorById(query)
  }

  async updateOrderPriorityByIds(query): Promise<any> {
    return this.airportRowRepository.updateOrderPriorityByIds(query)
  }
}
