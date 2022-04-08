<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Module for Firebase Admin SDK</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

# Installation

```bash
npm install @uptechworks/nestjs-firebase-admin
```

## Import module

```typescript
import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from '@uptechworks/nestjs-firebase-admin'
import * as admin from 'firebase-admin'
 
@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault()
      })
    }),
  ],
})
export class AppModule {}
```

# Example

## Inject FirebaseAdminSDK

```typescript
import { Injectable, Inject } from '@nestjs/common';
import { FIREBASE_ADMIN_INJECT, FirebaseAdminSDK } from '@uptechworks/nestjs-firebase-admin';

@Injectable()
export class AppService {
  constructor(
    @Inject(FIREBASE_ADMIN_INJECT) private firebaseAdmin: FirebaseAdminSDK,
  ) {}

  getUsers() {
    return this.firebaseAdmin.auth().listUsers();
  }
}
```

Originally based on https://github.com/tfarras/nestjs-firebase-admin
