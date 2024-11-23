import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const representatives = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullname: varchar().notNull(),
  email: varchar().notNull(),
});
