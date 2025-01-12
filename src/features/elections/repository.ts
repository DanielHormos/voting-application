import { Db } from "@/db";
import { eq } from "drizzle-orm";
import {
  ElectionInsert,
  ElectionPreferenceInsert,
  electionPreferenceTable,
  electionsTable,
  ElectionVoteInsert,
  electionVoteTable,
  ElectionWinnerInsert,
  electionWinnerTable,
} from "./schema";

export function createRepository(db: Db) {
  return {
    async getAllElections() {
      return await db.select().from(electionsTable);
    },
    async getElectionById(electionId: string) {
      return await db
        .select()
        .from(electionsTable)
        .where(eq(electionsTable.id, electionId));
    },
    async addElection(election: ElectionInsert) {
      await db.insert(electionsTable).values(election);
    },

    async addRepresentativeVote(vote: ElectionVoteInsert) {
      await db.insert(electionVoteTable).values(vote);
    },

    async addPublicPreference(electionPreference: ElectionPreferenceInsert) {
      await db.insert(electionPreferenceTable).values(electionPreference);
    },
    async updateElectionStatus(electionId: string) {
      await db
        .update(electionsTable)
        .set({ status: "concluded" })
        .where(eq(electionsTable.id, electionId));
    },

    async getElectionWinner() {
      return await db.select().from(electionWinnerTable);
    },
    async getElectionPreference(electionId: string) {
      return await db
        .select()
        .from(electionPreferenceTable)
        .where(eq(electionPreferenceTable.electionId, electionId));
    },
    async getElectionWinnerChoice(electionId: string) {
      return await db
        .select({ winnerChoice: electionWinnerTable.winnerChoice })
        .from(electionWinnerTable)
        .where(eq(electionWinnerTable.electionId, electionId));
    },
    async concludeElection(electionId: string) {
      await db
        .update(electionsTable)
        .set({ status: "concluded" })
        .where(eq(electionsTable.id, electionId));
    },
    async addElectionWinner(electionWinner: ElectionWinnerInsert) {
      await db.insert(electionWinnerTable).values(electionWinner);
    },
    async getConcludedElectionDataById(electionId: string) {
      return await db
        .select()
        .from(electionVoteTable)
        .where(eq(electionVoteTable.electionId, electionId));
    },
  };
}
