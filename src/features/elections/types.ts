import { electionsTable } from "./schema";

export type ElectionInsert = typeof electionsTable.$inferInsert;
export type ElectionSelect = typeof electionsTable.$inferSelect;

export type Election = {
  id: string;
  title: string;
  status: string;
  choices: string[];
};
