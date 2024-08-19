ALTER TABLE "resources" DROP CONSTRAINT "resources_name_unique";--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "title" varchar;