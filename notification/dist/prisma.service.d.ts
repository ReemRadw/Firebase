import { PrismaClient } from '@prisma/client';
import { OnModuleInit, INestApplication } from '@nestjs/common';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
