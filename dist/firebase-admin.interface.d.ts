import { ModuleMetadata } from "@nestjs/common/interfaces";
import * as admin from "firebase-admin";
export declare type FirebaseAdminUser = admin.auth.DecodedIdToken;
export interface FirebaseAdminModuleAsyncOptions extends Pick<ModuleMetadata, "imports"> {
    name?: string;
    useFactory?: (...args: any[]) => Promise<admin.AppOptions> | admin.AppOptions;
    inject?: any[];
}
