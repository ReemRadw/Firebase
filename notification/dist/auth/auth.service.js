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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma.service");
const responsive_service_1 = require("../responsive.service");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async signUp(res, createAuth) {
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
    async signIn(dto, res) {
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
            return responsive_service_1.ResponseService.badRequest(res, 'bad incredentials', 'Incorrect Email or Password');
        }
        const match = await bcrypt.compare(dto.password, user.password);
        if (!match) {
            return responsive_service_1.ResponseService.badRequest(res, 'bad incredentials', 'Incorrect Email or Password');
        }
        return responsive_service_1.ResponseService.success(res, 'signed In successfully', {
            user,
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map