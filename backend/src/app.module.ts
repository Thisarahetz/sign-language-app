import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TenantProviderMiddleware } from './tenant-provider/middlewares/tenant-provider.middleware';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TenantModule } from './tenant/tenant.module';
import { DrizzleModule } from './database/drizzle.module';
import { TenantService } from './tenant/tenant.service';
import { TenantProviderService } from './tenant-provider/services/tenant-provider-service';
import { RequestContextModule } from 'nestjs-request-context';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RequestContextModule,
    AuthModule,
    DrizzleModule,
    UserModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TenantService',
      useClass: TenantService,
    },
    TenantProviderService,
    TenantProviderMiddleware,
  ],
})
export class AppModule {
  configure(app: MiddlewareConsumer) {
    app.apply(TenantProviderMiddleware).forRoutes('*');
  }
}
