import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("election", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar().notNull(),
  status: varchar().notNull().default("ongoing"),
  choices: varchar().array().notNull(),
});
