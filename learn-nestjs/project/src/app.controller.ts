import { CatsService } from './cats/cats.service';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private catsService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
    //return this.catsService.hiCatServiceProduct();
  }
}
