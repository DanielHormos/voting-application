import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { publicVotesTable } from "./schema";

export function createPublicVoteRepository(db: Db) {
  return {
    async getPublicVoter() {
      return db.select().from(publicVotesTable);
    },
    async getPublicVoterById(id: string) {
      return db
        .select({ id: publicVotesTable.id })
        .from(publicVotesTable)
        .where(eq(publicVotesTable.id, id));
    },
    async addPublicVoterById(id: string) {
      return db.insert(publicVotesTable).values({ id });
    },
  };
}
