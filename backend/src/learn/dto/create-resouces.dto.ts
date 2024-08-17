
import {
  IsString,
  IsNotEmpty,
  isEnum,
  IsEnum,
  IsOptional,
} from 'class-validator';


export class CreateResourcesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  overview: string;

  @IsString()
  @IsNotEmpty()
  video: string;

  
}
