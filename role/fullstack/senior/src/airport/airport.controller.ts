import { AirportService } from './airport.service';
import {
  Controller,
  Res,
  HttpStatus,
  Query,
  Body,
  HttpException,
  Req,
  Patch,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiNotFoundResponse,
  ApiBearerAuth
} from '@nestjs/swagger';
import {
  apiNotFoundResponse,
  getResponseInvalid,
} from 'src/swagger/definitions';
import { httpExceptionNotFound } from 'src/commons';
import { priorityOrderAirport } from './enum';

@ApiTags('airport')
// @UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller({
  path: 'airport',
  version: '1',
})
export class AirportController {
  constructor(
    private readonly airportService: AirportService,
    ) {}
  @Patch()
  @ApiQuery({ name: 'airportId', type: 'number', required: true })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        airportOperatorId: {
          type: 'number',
          example: 3
        },
      },
    },
  })
  @ApiOkResponse({ description: 'Update Airport Operator' })
  @ApiResponse(getResponseInvalid)
  @ApiNotFoundResponse(apiNotFoundResponse)
  async updateAirportOperatorById(@Query('airportId') airportId, @Body('airportOperatorId') airportOperatorId, @Req() req, @Res() res) {
    const airport = await this.airportService.updateAirportOperatorById({airportId,airportOperatorId});
    
    if (!airport) {
      throw new HttpException(httpExceptionNotFound, HttpStatus.NOT_FOUND);
    }
    return res.status(HttpStatus.OK).json(airport);
  }

  @Patch('order-priority')
  @ApiQuery({ name: 'priorityOrder', type: 'string', enum: priorityOrderAirport, required: true })
  @ApiBody({
    schema: {
      description:'Ids de areopuertos a actualizar orden de prioridad',
      type: 'object',
      properties: {
        airportIds: {
          type: 'array',
          example: [3,1,2]
        }
      },
    },
  })
  @ApiOkResponse({ description: 'Update Airport Operator' })
  @ApiResponse(getResponseInvalid)
  @ApiNotFoundResponse(apiNotFoundResponse)
  async updateOrderPriorityByIds(@Query('priorityOrder') priorityOrder, @Body('airportIds') airportIds, @Req() req, @Res() res) {
    console.log(airportIds,priorityOrder);

    const airport = await this.airportService.updateAirportOperatorById({priorityOrder,airportIds})

    if (!airport) {
      throw new HttpException(httpExceptionNotFound, HttpStatus.NOT_FOUND);
    }
    return res.status(HttpStatus.OK).json(airport);
  }
}
