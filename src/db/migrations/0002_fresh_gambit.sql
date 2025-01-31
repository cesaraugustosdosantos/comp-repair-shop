ALTER TABLE "customers" DROP CONSTRAINT "customers_fone_unique";--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "phone" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "fone";--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_phone_unique" UNIQUE("phone");