/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAuth, SignIn } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { ResponseService } from '../responsive.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(res: Response, createAuth: CreateAuth) {
    const { email, password, name, fcm_token } = createAuth;
    const emailExist = await this.prisma.user.findUnique({
      where: { email },
    });
    if (emailExist) {
      return undefined;
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        name,
        fcm_token,
      },
    });
    return newUser;
  }

  async signIn(dto: SignIn, res) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    await this.prisma.user.update({
      where: {
        email: dto.email,
      },
      data: {
        fcm_token: dto.fcm_token,
      },
    });

    if (!user) {
      return ResponseService.badRequest(
        res,
        'bad incredentials',
        'Incorrect Email or Password',
      );
    }
    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      return ResponseService.badRequest(
        res,
        'bad incredentials',
        'Incorrect Email or Password',
      );
    }

    return ResponseService.success(res, 'signed In successfully', {
      user,
    });
  }
}
