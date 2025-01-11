import { electionsTable } from "./schema";

export type ElectionInsert = typeof electionsTable.$inferInsert;
export type ElectionSelect = typeof electionsTable.$inferSelect;

export type Election = {
  title: string;
  status: string;
  choices: string[];
};
