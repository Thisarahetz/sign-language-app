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
  import { desc, is, relations, sql } from 'drizzle-orm';
  import module from './module';
import { title } from 'process';

  
    export const resource = pgTable('resources', {
        id: serial('resource_id').primaryKey(),
        title: varchar('title'),
        name: varchar('name'),
        overview: varchar('overview'),
        description: jsonb('description'),
        video: varchar('video'),
        review: varchar('review'),
        module_id: integer('module_id').references(()=>module.id),
        createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
       
    });

    export const resourceModule = relations(resource, ({one}) => ({
        module: one(module)
    }));
    
    export default resource