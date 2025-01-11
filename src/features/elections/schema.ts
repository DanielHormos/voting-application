import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("election", {
  id: uuid().primaryKey(),
  title: varchar().notNull(),
  status: varchar().notNull().default("ongoing"),
  choices: varchar().array().notNull(),
});
