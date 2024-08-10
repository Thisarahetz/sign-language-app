import {
    integer,
    serial,
    text,
    pgTable,
    varchar,
    timestamp,
    pgEnum,
    boolean,
    jsonb,
  } from 'drizzle-orm/pg-core';
  import { is, relations, sql } from 'drizzle-orm';
import user from './user';

  
  export const dashboard = pgTable('dashboards', {
    id: serial('dashboard_id').primaryKey(),
    name: varchar('name').unique(),
    description: text('description'),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
    metadata: jsonb('metadata'),
    userId: integer('user_id').references(() => user.id),
  });

  export const usersRelations = relations(user, ({ one }) => ({
    dashboards: one(dashboard),
  }));

    export default dashboard