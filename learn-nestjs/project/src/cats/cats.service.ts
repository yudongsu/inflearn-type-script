import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServiceProduct(): string {
    console.log('hi cat service product!!!');
    return 'Hi Cat Service Product!';
  }
}
