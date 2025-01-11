import { pgTable, varchar } from "drizzle-orm/pg-core";

export const representativesTable = pgTable("representatives", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  fullname: varchar().notNull(),
  email: varchar().notNull().unique(),
});

export const votesTable = pgTable("votes", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  representativeId: uuid().notNull().references(representativesTable.id),
  voteId: varchar().notNull(),
});
