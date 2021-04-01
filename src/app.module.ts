import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져와 함수를 실행하는 역할
  providers: [MoviesService],
})
export class AppModule {}
