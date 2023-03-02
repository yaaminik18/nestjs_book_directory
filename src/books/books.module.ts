import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BookMiddleware } from './books.middleware';

import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [ BooksService]
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('books')
  }
   
}
