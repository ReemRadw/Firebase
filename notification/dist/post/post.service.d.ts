import { CreatePostDto } from "./dto/create-post.dto";
import { PrismaService } from "../prisma.service";
import { FirebaseService } from "../fire_base.service";
export declare class PostService {
    private prisma;
    private readonly firebaseService;
    constructor(prisma: PrismaService, firebaseService: FirebaseService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        title: string;
        content: string;
        published: boolean;
        authorId: number;
    }>;
}
