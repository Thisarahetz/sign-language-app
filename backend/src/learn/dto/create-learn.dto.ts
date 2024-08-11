
import {
  IsString,
  IsNotEmpty,
  isEnum,
  IsEnum,
  IsOptional,
} from 'class-validator';

export enum categoryEnum {
    CATEGORY = 'category',
    TOPIC = 'topic',
    GRAMMAR = 'grammar',
    GAME = 'game',
  }

export class CreateLearnDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  overview: string;

  @IsEnum(categoryEnum)
  @IsNotEmpty()
  category: categoryEnum;

  @IsString()
  @IsOptional()
  icon: string;
}
