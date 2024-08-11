import {
  integer,
  serial,
  text,
  pgTable,
  varchar,
  timestamp,
  pgEnum,
  boolean,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { is, relations, sql } from 'drizzle-orm';
import resource from './resource';
import score, { moduleToScore } from './score';

export const categoryEnum = pgEnum('category', ['topic','grammar','game']);


export type insertModule = typeof module.$inferInsert;


export const module = pgTable('module', {
  id: serial('module_id').primaryKey(),
  title : varchar('title').unique(),
  category: categoryEnum('category').notNull().default('topic'),
  overview: text('overview'),
  icon: varchar('icon'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export const moduleResource = relations(module,({one}) => ({
  resources: one(resource)
}));

export const moduleRelation = relations(module,({many}) => ({
  moduleToScore: many(moduleToScore)
}));

export default module;
