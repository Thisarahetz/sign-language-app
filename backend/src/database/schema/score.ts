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

export const score = pgTable('scores', {
  id: serial('score_id').primaryKey(),
  score: integer('score'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export const scoreModuleRelations = relations(score, ({ many }) => ({
  score: many(score),
}));

export default score;
