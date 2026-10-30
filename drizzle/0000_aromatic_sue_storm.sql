CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"subject" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_name" varchar(255) NOT NULL,
	"student_age" integer NOT NULL,
	"gender" varchar(50) NOT NULL,
	"country" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(100) NOT NULL,
	"course" varchar(100) NOT NULL,
	"class_days" varchar(100) NOT NULL,
	"tutor_preference" varchar(50) NOT NULL,
	"message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "contacts_created_at_idx" ON "contacts" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "contacts_email_idx" ON "contacts" USING btree ("email");--> statement-breakpoint
CREATE INDEX "registrations_created_at_idx" ON "registrations" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "registrations_email_idx" ON "registrations" USING btree ("email");