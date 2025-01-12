import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export type ElectionInsert = typeof electionsTable.$inferInsert;
export type ElectionSelect = typeof electionsTable.$inferSelect;

export const electionsTable = pgTable("election", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: varchar().notNull(),
  status: varchar().notNull().default("ongoing"),
  choices: varchar().array().notNull(),
});

export type ElectionVoteInsert = typeof electionVoteTable.$inferInsert;
export type ElectionVoteSelect = typeof electionVoteTable.$inferSelect;

export const electionVoteTable = pgTable("election_vote", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .notNull()
    .references(() => electionsTable.id)
    .notNull(),
  choice: varchar({ length: 255 }).notNull(),
  representativeId: uuid().notNull(),
  totalVotes: integer().default(0),
});

export type ElectionPreferenceInsert =
  typeof electionPreferenceTable.$inferInsert;
export type ElectionPreferenceSelect =
  typeof electionPreferenceTable.$inferSelect;

export const electionPreferenceTable = pgTable("election_preference", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .references(() => electionsTable.id)
    .notNull(),
  preference: varchar({ length: 255 }).notNull(),
  voterId: uuid().notNull(),
});

export type ElectionWinnerInsert = typeof electionWinnerTable.$inferInsert;
export type ElectionWinnerSelect = typeof electionWinnerTable.$inferSelect;

export const electionWinnerTable = pgTable("election_winner", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  electionId: uuid()
    .references(() => electionsTable.id)
    .notNull(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  time: timestamp().notNull(),
  winnerChoice: varchar({ length: 255 }).notNull(),
  choices: varchar({ length: 255 }).array().notNull(),
  agreed: integer().notNull(),
  disagreed: integer().notNull(),
  total: integer().notNull(),
});
