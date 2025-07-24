import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatsService: RiderCoordinatesService) {}

  @Get()
  getRiderCoordinates() {
    return 'Hellow i am from rider coordinates';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    createCoordinateDTO: CreateCoordinatesDTO,
  ) {
    return this.coordinatsService.saveRiderCoordiantes(createCoordinateDTO);
  }
}
