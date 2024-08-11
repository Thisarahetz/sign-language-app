DO $$ BEGIN
 CREATE TYPE "public"."category" AS ENUM('topic', 'grammar', 'game');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('is_viewed', 'is_completed', 'is_incomplete', 'is_not_started', 'is_admin_viewed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('super_admin', 'admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
	"title" varchar,
	"category" "category" DEFAULT 'topic' NOT NULL,
	"overview" text,
	"icon" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "module_title_unique" UNIQUE("title")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resources" (
	"resource_id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"overview" jsonb,
	"video" varchar,
	"review" varchar,
	"module_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "resources_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scores" (
	"score_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"score" integer,
	"status" "status" DEFAULT 'is_not_started' NOT NULL,
	"total_time_spent" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"username" varchar,
	"email" varchar,
	"password" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"user_social_id" varchar DEFAULT null,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "module_to_score" (
	"module_to_score_id" serial PRIMARY KEY NOT NULL,
	"module_id" integer,
	"score_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "module_to_score_module_id_score_id_pk" PRIMARY KEY("module_id","score_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dashboards" ADD CONSTRAINT "dashboards_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "resources" ADD CONSTRAINT "resources_module_id_module_module_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."module"("module_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "module_to_score" ADD CONSTRAINT "module_to_score_module_id_module_module_id_fk" FOREIGN KEY ("module_id") REFERENCES "public"."module"("module_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "module_to_score" ADD CONSTRAINT "module_to_score_score_id_scores_score_id_fk" FOREIGN KEY ("score_id") REFERENCES "public"."scores"("score_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
