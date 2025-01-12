import { Db } from "@/db";
import {
  electionsTable,
  electionVoteTable,
  electionPreferenceTable,
  electionWinnerTable,
  ElectionInsert,
  ElectionVoteInsert,
  ElectionPreferenceInsert,
  ElectionWinnerInsert,
} from "./schema";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async addElection(election: ElectionInsert) {
      await db.insert(electionsTable).values(election);
    },
    async getAllElections() {
      return await db.select().from(electionsTable);
    },
    async getElectionById(electionId: string) {
      return await db
        .select()
        .from(electionsTable)
        .where(eq(electionsTable.id, electionId));
    },
    async endElection(electionId: string) {
      await db
        .update(electionsTable)
        .set({ status: "concluded" })
        .where(eq(electionsTable.id, electionId));
    },

    async addRepresentativeVote(vote: ElectionVoteInsert) {
      await db.insert(electionVoteTable).values(vote);
    },
    async getConcludedElectionDataById(electionId: string) {
      return await db
        .select()
        .from(electionVoteTable)
        .where(eq(electionVoteTable.electionId, electionId));
    },

    async addPublicPreference(electionPreference: ElectionPreferenceInsert) {
      await db.insert(electionPreferenceTable).values(electionPreference);
    },
    async getElectionPreference(electionId: string) {
      return await db
        .select()
        .from(electionPreferenceTable)
        .where(eq(electionPreferenceTable.electionId, electionId));
    },

    async addElectionWinner(electionWinner: ElectionWinnerInsert) {
      await db.insert(electionWinnerTable).values(electionWinner);
    },
    async getElectionWinner() {
      return await db.select().from(electionWinnerTable);
    },
    async getElectionWinnerChoice(electionId: string) {
      return await db
        .select({ winnerChoice: electionWinnerTable.winnerChoice })
        .from(electionWinnerTable)
        .where(eq(electionWinnerTable.electionId, electionId));
    },
  };
}
