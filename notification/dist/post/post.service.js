"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const fire_base_service_1 = require("../fire_base.service");
let PostService = class PostService {
    constructor(prisma, firebaseService) {
        this.prisma = prisma;
        this.firebaseService = firebaseService;
    }
    async create(createPostDto) {
        const { title, content, published, authorId } = createPostDto;
        const aud = +authorId;
        const newPost = await this.prisma.post.create({
            data: {
                title,
                content,
                published,
                aud,
            },
        });
        const user = await this.prisma.user.findUnique({
            where: {
                id: +authorId,
            },
        });
        const payload = {
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
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        fire_base_service_1.FirebaseService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map