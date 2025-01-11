import { Db } from "@/db";
import { representativesTable } from "@/features/representatives/schema";
import { RepresentativeInsert } from "./types";
import { votesTable } from "./schema";

export function createRepository(db: Db) {
  return {
    async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },

    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      return await db.insert(representativesTable).values({
        fullname,
        email,
      });
    },

    async voteRepresentative(representativeId: string, voteId: string) {
      return await db.insert(votesTable).values({
        representativeId,
        voteId,
      });
    },

    async checkIfVoterVoted(representativeId: string, voterId: string) {
      return await db
        .select()
        .from(votesTable)
        .where(
          eq(votesTable.representativeId, representativeId) &&
            eq(votesTable.voteId.equals(voterId))
        );
    },
  };
}
