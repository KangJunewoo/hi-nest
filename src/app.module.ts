import { Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule], // 모듈을 만들어서 생겨남.
  controllers: [AppController], // url을 가져와 함수를 실행하는 역
  providers: [],
})
export class AppModule {}
