import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dogsService: DogsService,
  ) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return this.dogsService.getDogs();
  }
}
