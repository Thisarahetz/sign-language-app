import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import env from '@/env';

@Global()
@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const connectionString = env.DATABASE_URL;
        const maxRetries = 5; // Max number of retries
        const retryDelay = 3000; // Delay between retries in ms (3 seconds)
        let attempt = 0;
        let pool: Pool;

        while (attempt < maxRetries) {
          try {
            pool = new Pool({
              connectionString,
              ssl: false,
            });

            await pool.query('SELECT 1'); // Test the connection

            return drizzle(pool, { schema });
          } catch (error) {
            console.error(`Attempt ${attempt + 1} failed. Retrying in ${retryDelay / 1000} seconds...`, error);
            attempt++;
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
          }
        }

        throw new Error('Could not establish a database connection after several attempts.');
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
