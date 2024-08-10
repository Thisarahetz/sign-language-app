import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DrizzleModule } from './database/drizzle.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
