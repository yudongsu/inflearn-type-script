import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getDogs(): string {
    return 'Hello Dogs World!';
  }
}
