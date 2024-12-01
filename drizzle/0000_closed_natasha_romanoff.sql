CREATE TABLE IF NOT EXISTS "representatives" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "representatives_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"fullname" varchar NOT NULL,
	"email" varchar NOT NULL
);
