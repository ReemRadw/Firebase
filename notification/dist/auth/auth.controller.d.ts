/// <reference types="express" />
import { AuthService } from './auth.service';
import { CreateAuth, SignIn } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: CreateAuth, res: Response): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        fcm_token: string;
    }>;
    signin(dto: SignIn, res: Response): Promise<void | import("express").Response<any, Record<string, any>>>;
}
