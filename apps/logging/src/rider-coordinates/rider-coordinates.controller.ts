import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatsService: RiderCoordinatesService) {}

  @Get(':id')
  async getRiderCoordinates(@Param('id') id: string) {
    console.log('LOGGGGGG', id);
    return this.coordinatsService.getRiderCoordinates(id);
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return this.coordinatsService.saveRiderCoordiantes(createCoordinateDTO);
  }
}
