/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get(':id')
  getRiderById(
    @Param()
    params: any,
  ) {
    return {
      _id: params.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@gmail.com',
    };
  }
}
