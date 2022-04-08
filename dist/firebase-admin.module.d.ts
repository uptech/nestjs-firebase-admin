import { DynamicModule } from "@nestjs/common";
import * as admin from "firebase-admin";
import { FirebaseAdminModuleAsyncOptions } from "./firebase-admin.interface";
export declare class FirebaseAdminModule {
    static forRoot(options: admin.AppOptions): DynamicModule;
    static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule;
}
