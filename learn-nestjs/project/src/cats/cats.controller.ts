import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-Exception.filter';
import { identity } from 'rxjs';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    throw new HttpException(
      {
        statusCode: 500,
        message: 'Internal server error',
      },
      401,
    );
    return 'get all cat api';
  }

  @Get(':id')
  getOneCats(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'get cat api';
  }

  @Post()
  createCat() {
    return 'create cat api';
  }

  @Put()
  updateCat() {
    return 'update cat api';
  }

  @Delete()
  deleteCat() {
    return 'delete cat api';
  }
}
