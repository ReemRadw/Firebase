/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { MessagingPayload } from 'firebase-admin/lib/messaging/messaging-api';
import 'dotenv/config';

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);

  constructor() {
    this.initializeFirebaseAdmin();
  }

  private async initializeFirebaseAdmin() {
    if (admin.apps.length === 0) {
      const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
      if (!serviceAccountPath) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH is not defined');
      }

      try {
        const serviceAccount = await import(serviceAccountPath);

        // admin.initializeApp({
        //   credential: admin.credential.cert(serviceAccount),
        // });

        this.logger.log('Firebase Admin initialized');
      } catch (error) {
        this.logger.error('Failed to load Firebase service account:', error);
        throw error;
      }
    } else {
      this.logger.log('Firebase Admin already initialized');
    }
  }

  async sendNotification(
    tokens: string[],
    payload: MessagingPayload,
  ): Promise<void> {
    try {
      const response = await admin.messaging().sendToDevice(tokens, payload);
      this.logger.log('Successfully sent message:', response);
    } catch (error) {
      this.logger.error('Error sending message:', error);
    }
  }
}
