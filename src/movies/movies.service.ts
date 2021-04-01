import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

// 여기에 DB가 연동되겠지.
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }
}
