/// <reference types="express" />
import { CreateAuth, SignIn } from './dto/create-auth.dto';
import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(res: Response, createAuth: CreateAuth): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        fcm_token: string;
    }>;
    signIn(dto: SignIn, res: any): Promise<void | import("express").Response<any, Record<string, any>>>;
}
