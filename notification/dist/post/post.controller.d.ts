import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        title: string;
        content: string;
        published: boolean;
        authorId: number;
    }>;
}
