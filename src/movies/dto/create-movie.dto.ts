import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  // 데코레이더토 타입검사 가능.
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  @IsOptional() // 장르 꼭 안넣어줘도 되게 함
  @IsString({ each: true })
  readonly genres: string[];
}
