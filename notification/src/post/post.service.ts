/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PrismaService } from "../prisma.service";
import { MessagingPayload } from "firebase-admin/lib/messaging/messaging-api";
import { FirebaseService } from "../fire_base.service";

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private readonly firebaseService: FirebaseService
  ) {}
  async create(createPostDto: CreatePostDto) {
    const { title, content, published, authorId } = createPostDto;
    const newPost = await this.prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId,
      },
    });
    const user = await this.prisma.user.findUnique({
      where: {
        id: +authorId,
      },
    });

    const payload: MessagingPayload = {
      notification: {
        title: "New Post",
        body: "You have received a new post.",
      },
      data: {
        userId: "12345",
        action: "openChat",
      },
    };
    await this.firebaseService.sendNotification([user.fcm_token], payload);

    return newPost;
  }
}
