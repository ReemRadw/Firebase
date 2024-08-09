/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma.service';
import { FirebaseService } from './fire_base.service';

@Module({
  imports: [AuthModule, PostModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService, PrismaService],
})
export class AppModule {}
