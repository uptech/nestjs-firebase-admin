import { DynamicModule, Global, Module } from "@nestjs/common";
import * as admin from "firebase-admin";
import {
  FIREBASE_ADMIN_INJECT,
  FIREBASE_ADMIN_MODULE_OPTIONS,
} from "./firebase-admin.constant";
import { FirebaseAdminModuleAsyncOptions } from "./firebase-admin.interface";

@Global()
@Module({})
export class FirebaseAdminModule {
  static forRoot(options: admin.AppOptions): DynamicModule {
    const firebaseAdminModuleOptions = {
      provide: FIREBASE_ADMIN_MODULE_OPTIONS,
      useValue: options,
    };

    const app =
      admin.apps.length === 0 ? admin.initializeApp(options) : admin.apps[0];

    const firebaseAuthencationProvider = {
      provide: FIREBASE_ADMIN_INJECT,
      useValue: app,
    };

    return {
      module: FirebaseAdminModule,
      providers: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
      exports: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
    };
  }

  static forRootAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule {
    const firebaseAdminModuleOptions = {
      provide: FIREBASE_ADMIN_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    const firebaseAuthencationProvider = {
      provide: FIREBASE_ADMIN_INJECT,
      useFactory: (opt: admin.AppOptions) => {
        const app =
          admin.apps.length === 0 ? admin.initializeApp(opt) : admin.apps[0];

        return app;
      },
      inject: [FIREBASE_ADMIN_MODULE_OPTIONS],
    };

    return {
      module: FirebaseAdminModule,
      imports: options.imports,
      providers: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
      exports: [firebaseAdminModuleOptions, firebaseAuthencationProvider],
    };
  }
}
