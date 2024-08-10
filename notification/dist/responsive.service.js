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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
let ResponseService = class ResponseService {
    static success(res, message, data = {}) {
        res.status(common_1.HttpStatus.OK).json({ type: 'Success', message, data });
    }
    static created(res, message, data = {}) {
        res.status(common_1.HttpStatus.CREATED).json({ type: 'Created', message, data });
    }
    static forbidden(res, message) {
        return res
            .status(common_1.HttpStatus.FORBIDDEN)
            .json({ type: 'Forbidden', message });
    }
    static conflict(res, message, data = {}, type = 'Conflict') {
        return res.status(common_1.HttpStatus.CONFLICT).json({ type, message, data });
    }
    static notFound(res, message) {
        return res.status(common_1.HttpStatus.NOT_FOUND).json({ type: 'NotFound', message });
    }
    static internalServerError(res) {
        return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            type: 'InternalServerError',
            message: 'An error occured on the server, Please try again later.',
        });
    }
    static unauthorized(res) {
        res
            .status(common_1.HttpStatus.UNAUTHORIZED)
            .json({ type: 'Unauthorized', message: 'Unauthorized' });
    }
    static badRequest(res, type, message) {
        return res.status(common_1.HttpStatus.BAD_REQUEST).json({ type, message });
    }
};
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], ResponseService, "success", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], ResponseService, "created", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ResponseService, "forbidden", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object]),
    __metadata("design:returntype", void 0)
], ResponseService, "conflict", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ResponseService, "notFound", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResponseService, "internalServerError", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResponseService, "unauthorized", null);
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ResponseService, "badRequest", null);
ResponseService = __decorate([
    (0, common_1.Controller)()
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=responsive.service.js.map