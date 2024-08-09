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
var FirebaseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
require("dotenv/config");
let FirebaseService = FirebaseService_1 = class FirebaseService {
    constructor() {
        this.logger = new common_1.Logger(FirebaseService_1.name);
        this.initializeFirebaseAdmin();
    }
    async initializeFirebaseAdmin() {
        var _a;
        if (admin.apps.length === 0) {
            const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
            if (!serviceAccountPath) {
                throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH is not defined');
            }
            try {
                const serviceAccount = await (_a = serviceAccountPath, Promise.resolve().then(() => require(_a)));
                this.logger.log('Firebase Admin initialized');
            }
            catch (error) {
                this.logger.error('Failed to load Firebase service account:', error);
                throw error;
            }
        }
        else {
            this.logger.log('Firebase Admin already initialized');
        }
    }
    async sendNotification(tokens, payload) {
        try {
            const response = await admin.messaging().sendToDevice(tokens, payload);
            this.logger.log('Successfully sent message:', response);
        }
        catch (error) {
            this.logger.error('Error sending message:', error);
        }
    }
};
FirebaseService = FirebaseService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=fire_base.service.js.map