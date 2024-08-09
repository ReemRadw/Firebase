import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsOptional()
  published: boolean;

  @ApiProperty()
  @IsOptional()
  authorId: string;
}
