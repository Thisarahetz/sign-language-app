import {
  integer,
  serial,
  text,
  pgTable,
  varchar,
  timestamp,
  pgEnum,
  boolean,
} from 'drizzle-orm/pg-core';
import { is, relations, sql } from 'drizzle-orm';

export type Tenant = typeof tenant.$inferSelect;
export type NewTenant = typeof tenant.$inferInsert;


export const tenant = pgTable('tenants', {
  id: serial('tenant_id').primaryKey(),
  companyName: varchar('company_name ').notNull(),
  subDomain: varchar('sub_domain').notNull().unique(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});

export default tenant

