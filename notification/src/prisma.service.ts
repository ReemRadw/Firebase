/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { OnModuleInit, Injectable, INestApplication } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on = async () => {
      console.log('Prisma is about to exit, closing app...');
      await app.close();
    };
  }
}
