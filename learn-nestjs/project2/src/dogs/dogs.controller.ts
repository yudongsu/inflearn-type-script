import { DogsService } from './dogs.service';
import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogs(): string {
    return this.dogsService.getDogs();
  }
}
