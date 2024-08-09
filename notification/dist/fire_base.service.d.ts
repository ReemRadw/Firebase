import { MessagingPayload } from 'firebase-admin/lib/messaging/messaging-api';
import 'dotenv/config';
export declare class FirebaseService {
    private readonly logger;
    constructor();
    private initializeFirebaseAdmin;
    sendNotification(tokens: string[], payload: MessagingPayload): Promise<void>;
}
