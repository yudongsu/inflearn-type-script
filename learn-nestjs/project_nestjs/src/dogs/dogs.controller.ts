import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getAllDog() {
    return 'get all dog api';
    //return this.dogsService.getHello();
  }

  @Get(':id')
  getDog() {
    return 'get dog api';
  }

  @Post()
  createDog() {
    return 'get dog api';
  }

  @Put(':id')
  UpdateDog() {
    return 'update dog api';
  }

  @Patch(':id')
  UpdatePatialDog() {
    return 'updatepatial dog api';
  }

  @Delete(':id')
  DeleteDog() {
    return 'delete dog api';
  }
}
