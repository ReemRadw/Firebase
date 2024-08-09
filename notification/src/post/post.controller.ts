import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
}
