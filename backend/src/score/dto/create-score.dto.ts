import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsBoolean,
  IsString,
  ValidateNested,
  IsNumber,
} from 'class-validator';

// Define History as a class
export class History {
  @IsString()
  @IsNotEmpty()
  given_answer: string;

  @IsString()
  @IsNotEmpty()
  correct_answer: string;

  @IsBoolean()
  @IsNotEmpty()
  is_correct: boolean;

  @IsString()
  @IsNotEmpty()
  url: string;

}

export class CreateScoreDto {
  @IsNumber()
  @IsNotEmpty()
  score: number;

  @ValidateNested()
  @Type(() => History)
  @IsNotEmpty()
  history: History;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  total_time_spent: number;
}
