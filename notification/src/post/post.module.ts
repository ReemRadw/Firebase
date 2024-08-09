/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from 'src/prisma.service';
import { FirebaseService } from 'src/fire_base.service';

@Module({
  controllers: [PostController],
  providers: [PrismaService,FirebaseService, PostService],
})
export class PostModule {}
