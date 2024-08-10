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
import module from './module';

export const roleEnum = pgEnum('category_type', ['topic', 'grammar', 'game']);

export const category = pgTable('category', {
  id: serial('category_id').primaryKey(),
  name: varchar('name').unique(),
  type: roleEnum('type').notNull().default('topic'),
  description: text('description'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export const categoryRelations = relations(module, ({ many }) => ({
    modules: many(module),
}));

export default category;
