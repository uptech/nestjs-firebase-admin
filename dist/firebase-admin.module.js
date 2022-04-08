"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FirebaseAdminModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const firebase_admin_constant_1 = require("./firebase-admin.constant");
let FirebaseAdminModule = FirebaseAdminModule_1 = class FirebaseAdminModule {
    static forRoot(options) {
        const firebaseAdminModuleOptions = {
            provide: firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS,
            useValue: options,
        };
        const app = admin.apps.length === 0 ? admin.initializeApp(options) : admin.apps[0];
        const firebaseAuthencationProvider = {
            provide: firebase_admin_constant_1.FIREBASE_ADMIN_INJECT,
            useValue: app,
        };
        return {
            module: FirebaseAdminModule_1,
            providers: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
            exports: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
        };
    }
    static forRootAsync(options) {
        const firebaseAdminModuleOptions = {
            provide: firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject || [],
        };
        const firebaseAuthencationProvider = {
            provide: firebase_admin_constant_1.FIREBASE_ADMIN_INJECT,
            useFactory: (opt) => {
                const app = admin.apps.length === 0 ? admin.initializeApp(opt) : admin.apps[0];
                return app;
            },
            inject: [firebase_admin_constant_1.FIREBASE_ADMIN_MODULE_OPTIONS],
        };
        return {
            module: FirebaseAdminModule_1,
            imports: options.imports,
            providers: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
            exports: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
        };
    }
};
FirebaseAdminModule = FirebaseAdminModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], FirebaseAdminModule);
exports.FirebaseAdminModule = FirebaseAdminModule;
//# sourceMappingURL=firebase-admin.module.js.map