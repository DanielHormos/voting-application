import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("elections", {
  id: uuid()
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  title: varchar().notNull(),
  status: varchar().notNull().default("ongoing"),
  choices: varchar().array().notNull(),
});
