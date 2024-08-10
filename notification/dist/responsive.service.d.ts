import { Response } from 'express';
export declare class ResponseService {
    static success(res: Response, message: string, data?: object): void;
    static created(res: Response, message: string, data?: object): void;
    static forbidden(res: Response, message: string): Response<any, Record<string, any>>;
    static conflict(res: Response, message: string, data?: object, type?: string): Response<any, Record<string, any>>;
    static notFound(res: Response, message: string): Response<any, Record<string, any>>;
    static internalServerError(res: Response): Response<any, Record<string, any>>;
    static unauthorized(res: Response): void;
    static badRequest(res: Response, type: string, message: string): Response<any, Record<string, any>>;
}
