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
  import module from './module';

  
    export const resource = pgTable('resources', {
        id: serial('resource_id').primaryKey(),
        name: varchar('name').unique(),
        overview: jsonb('overview'),
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