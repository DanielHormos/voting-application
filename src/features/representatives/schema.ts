import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export type RepresentativeInsert = typeof representativesTable.$inferInsert;
export type RepresentativeSelect = typeof representativesTable.$inferSelect;

export const representativesTable = pgTable("representatives", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  fullname: varchar().notNull(),
  email: varchar().notNull().unique(),
});

export type representativeVotesTableInsert = typeof votesTable.$inferInsert;
export type representativeVotesTableSelect = typeof votesTable.$inferSelect;

export const votesTable = pgTable("votes", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  representativeId: uuid()
    .notNull()
    .references(() => representativesTable.id),
  voteId: varchar().notNull(),
});
