/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuth {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  fcm_token: string;
}

export class SignIn {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  fcm_token: string;
}
