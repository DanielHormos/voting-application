import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const representativesTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullname: varchar().notNull(),
  email: varchar().notNull(),
});
