DO $$ BEGIN
 CREATE TYPE "public"."category_type" AS ENUM('topic', 'grammar', 'game');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"type" "category_type" DEFAULT 'topic' NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dashboards" (
	"dashboard_id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"metadata" jsonb,
	"user_id" integer,
	CONSTRAINT "dashboards_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "module" (
	"module_id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"description" text,
	"category_id" integer,
	"resource_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "module_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "score_to_module" (
	"score_id" integer NOT NULL,
	"module_id" integer NOT NULL,
	CONSTRAINT "score_to_module_score_id_module_id_pk" PRIMARY KEY("score_id","module_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resources" (
	"resource_id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"overview" jsonb,
	"video" varchar,
	"review" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "resources_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scores" (
	"score_id" serial PRIMARY KEY NOT NULL,
	"score" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "tenants";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_tenant_id_tenants_tenant_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dashboards" ADD CONSTRAINT "dashboards_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "score_to_module" ADD CONSTRAINT "score_to_module_score_id_scores_score_id_fk" FOREIGN KEY ("score_id") REFERENCES "public"."scores"("score_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "score_to_module" ADD CONSTRAINT "score_to_module_module_id_module_module_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."module"("module_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "first_name";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "last_name";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "tenant_id";