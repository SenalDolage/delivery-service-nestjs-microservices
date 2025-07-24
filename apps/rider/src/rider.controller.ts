import { Controller } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  //@Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  getRiderById(@Payload() data: { id: string }) {
    return {
      _id: data.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@gmail.com',
    };
  }
}
