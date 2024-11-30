import {
  integer,
  serial,
  text,
  pgTable,
  json,
  timestamp,
  pgEnum,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { is, relations, sql } from 'drizzle-orm';
import module from './module';
import user from './user';

//create score type
export type NewScore = typeof score.$inferInsert;
export type Score = typeof score.$inferSelect;


export const statues = pgEnum('status', [
  'is_viewed',
  'is_completed',
  'is_incomplete',
  'is_not_started',
  'is_admin_viewed',
]);

export const score = pgTable('scores', {
  id: serial('score_id').primaryKey(),
  user_id: integer('user_id').notNull(),
  score: integer('score'),
  history: json('history'),
  status: statues('status').notNull().default('is_not_started'),
  total_time_spent: integer('total_time_spent'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export const scoreRelation = relations(score, ({ many }) => ({
  moduleToScore: many(moduleToScore),
}));

//score and user relation one to many
export const userToScore = relations(score, ({ one }) => ({
  scoreToUser: one(user, {
    fields: [score.user_id],
    references: [user.id],
  }),
}));

export const moduleToScore = pgTable(
  'module_to_score',
  {
    module_id: integer('module_id')
      .notNull()
      .references(() => module.id, { onDelete: 'cascade' }),
    score_id: integer('score_id')
      .notNull()
      .references(() => score.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { mode: 'string' })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'string' })
      .notNull()
      .defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.module_id, t.score_id] }),
  }),
);

export const moduleToScoreRelation = relations(moduleToScore, ({ one }) => ({
  module: one(module, {
    fields: [moduleToScore.module_id],
    references: [module.id],
  }),
  score: one(score, {
    fields: [moduleToScore.score_id],
    references: [score.id],
  }),
}));



export default score;
