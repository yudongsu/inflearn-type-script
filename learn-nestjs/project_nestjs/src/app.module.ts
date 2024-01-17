import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [DogsModule],
  controllers: [AppController, DogsController],
  providers: [AppService, DogsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'dogs', method: RequestMethod.GET })
      .forRoutes(DogsController);
  }
}
