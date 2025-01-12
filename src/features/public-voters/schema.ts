import { sql } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const publicVotesTable = pgTable("public_votes", {
  id: uuid()
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
});

export type PublicVoteInsert = typeof publicVotesTable.$inferInsert;
export type PublicVoteSelect = typeof publicVotesTable.$inferSelect;
