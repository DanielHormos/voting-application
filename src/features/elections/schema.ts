import { sql } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const electionsTable = pgTable("election", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar().notNull(),
  status: varchar().notNull().default("ongoing"),
  choices: varchar().array().notNull(),
});

export const electionVoteTable = pgTable("election_vote", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .notNull()
    .references(() => electionsTable.id)
    .notNull(),
  choice: varchar().notNull(),
  representativeId: uuid().notNull(),
  totalVotes: integer().default(0),
});

export const electionPreferenceTable = pgTable("election_preference", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .references(() => electionsTable.id)
    .notNull(),
  preference: varchar().notNull(),
  voterId: uuid().notNull(),
});

export const electionWinnerTable = pgTable("election_winner", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .references(() => electionsTable.id)
    .notNull(),
  name: varchar().notNull(),
  email: varchar().notNull(),
  title: varchar().notNull(),
  winnerChoice: varchar().notNull(),
});

export type ElectionInsert = typeof electionsTable.$inferInsert;
export type ElectionSelect = typeof electionsTable.$inferSelect;

export type ElectionVoteInsert = typeof electionVoteTable.$inferInsert;
export type ElectionVoteSelect = typeof electionVoteTable.$inferSelect;

export type ElectionPreferenceInsert =
  typeof electionPreferenceTable.$inferInsert;
export type ElectionPreferenceSelect =
  typeof electionPreferenceTable.$inferSelect;

export type ElectionWinnerInsert = typeof electionWinnerTable.$inferInsert;
export type ElectionWinnerSelect = typeof electionWinnerTable.$inferSelect;
