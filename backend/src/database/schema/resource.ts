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

  
    export const resource = pgTable('resources', {
        id: serial('resource_id').primaryKey(),
        name: varchar('name').unique(),
        overview: jsonb('overview'),
        video: varchar('video'),
        review: varchar('review'),
        createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
       
    });
    
    export default resource