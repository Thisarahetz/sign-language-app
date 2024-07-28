import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = configService.get<string>(
          process.env.DATABASE_URL,
        );
        const pool = new Pool({
          connectionString,
          ssl: true,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
