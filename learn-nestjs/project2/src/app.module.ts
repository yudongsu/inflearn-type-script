import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsModule } from './dogs/dogs.module';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [DogsModule],
  controllers: [AppController, DogsController],
  providers: [AppService, DogsService],
})
export class AppModule {}
