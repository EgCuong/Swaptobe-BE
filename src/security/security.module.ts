import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AccessControlGuard } from './guards';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessControlGuard,
    },
  ],
})
export class SecurityModule {}
