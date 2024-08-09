/* eslint-disable prettier/prettier */
import { Controller, Post, Res } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuth, SignIn } from './dto/create-auth.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  signup(dto: CreateAuth, @Res() res: Response) {
    return this.authService.signUp(res, dto);
  }

  @Post('signin')
  @ApiCreatedResponse({
    description: 'user signIn',
  })
  @ApiResponse({
    status: 200,
    description: 'access Token',
    type: String,
  })
  @ApiBody({ type: SignIn })
  signin(dto: SignIn, @Res() res: Response) {
    return this.authService.signIn(dto, res);
  }
}
