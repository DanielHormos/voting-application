import { Db } from "@/db";
import {
  RepresentativeInsert,
  representativesTable,
  votesTable,
} from "./schema";
import { sql, eq, count } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async getAllRepresentatives() {
      const representativesWithVotes = await db
        .select({
          id: representativesTable.id,
          fullname: representativesTable.fullname,
          email: representativesTable.email,
          totalVotes: sql`COUNT(${votesTable.id})`.as("votes"),
        })
        .from(representativesTable)
        .leftJoin(
          votesTable,
          eq(representativesTable.id, votesTable.representativeId)
        )
        .groupBy(representativesTable.id);
      return representativesWithVotes;
    },

    async addRepresentative(representative: RepresentativeInsert) {
      return await db.insert(representativesTable).values(representative);
    },

    async addPublicVote(representativeId: string, publicVoterId: string) {
      await db
        .insert(votesTable)
        .values({ representativeId, voteId: publicVoterId });
    },

    async getRepresentativeById(representativeId: string) {
      return await db
        .select()
        .from(representativesTable)
        .where(eq(representativesTable.id, representativeId));
    },

    async getRepresentativeVotesById(representativeId: string) {
      const representatives = await db
        .select({ totalVotes: count() })
        .from(votesTable)
        .where(eq(votesTable.representativeId, representativeId));

      return representatives.map((vote) => ({ totalVotes: vote.totalVotes }));
    },

    async checkIfPublicVoterVoted(
      representativeId: string,
      publicVoterId: string
    ) {
      const vote = await db
        .select()
        .from(votesTable)
        .where(
          eq(votesTable.representativeId, representativeId) &&
            eq(votesTable.voteId, publicVoterId)
        );
      return vote.length > 0;
    },
  };
}
