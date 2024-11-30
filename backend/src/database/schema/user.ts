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
import score from './score';



export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;


export const roleEnum = pgEnum('role', ['super_admin', 'admin', 'user']);

export const user = pgTable('users', {
  id: serial('user_id').primaryKey(),
  username: varchar('username').unique(),
  email: varchar('email').unique(),
  password: varchar('password'),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
  role: roleEnum('role').notNull().default('user'),
  user_social_id: varchar('user_social_id').default(null),

});



export const userRelation = relations(user, ({ many }) => ({
  scoreToUser: many(score)
}));





export default user