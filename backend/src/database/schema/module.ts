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
import category from './category';
import resource from './resource';
import score from './score';

export const module = pgTable('module', {
  id: serial('module_id').primaryKey(),
  name: varchar('name').unique(),
  description: text('description'),
  category_id: integer('category_id'),
  resource_id: integer('resource_id'),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export const moduleRelations = relations(module, ({ one }) => ({
  category: one(category, {
    fields: [module.category_id],
    references: [category.id],
  }),
}));

export const moduleResourceRelations = relations(module, ({ one }) => ({
  resource: one(resource, {
    fields: [module.resource_id],
    references: [resource.id],
  }),
}));

export const moduleScoreRelations = relations(module, ({ many }) => ({
  module: many(scoreToModule),
}));

export const scoreToModule = pgTable(
  'score_to_module',
  {
    score_id: integer('score_id')
      .notNull()
      .references(() => score.id),
    module_id: integer('module_id')
      .notNull()
      .references(() => module.id),
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.score_id, t.module_id],
    }),
  }),
);

export const manyModuleScoreRelations=relations(scoreToModule, ({ one }) => ({
    score: one(score, {
        fields: [scoreToModule.score_id],
        references: [score.id],
    }),
    module: one(module, {
        fields: [scoreToModule.module_id],
        references: [module.id],
    }),
}));




export default module;
