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
import { tenant } from './tenant';

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;


export const roleEnum = pgEnum('role', ['super_admin', 'admin', 'user']);

export const user = pgTable('users', {
  id: serial('user_id').primaryKey(),
  username: varchar('username').unique(),
  email: varchar('email').unique(),
  password: varchar('password'),
  firstName: varchar('first_name'),
  lastName: varchar('last_name'),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
  role: roleEnum('role').notNull().default('user'),
  tenantId: integer('tenant_id')
    .notNull()
    .references(() => tenant.id),
});


export const userRelations = relations(user, ({ one }) => ({
  tenant: one(tenant, {
    fields: [user.tenantId],
    references: [tenant.id],
  }),
}));

export default user