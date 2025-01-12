import { Db } from "@/db";
import { publicVotesTable } from "./schema";

export function createPublicVoteRepository(db: Db) {
  return {
    async getPublicVoteData() {
      return db.select().from(publicVotesTable);
    },
    async addPublicVoterById(id: string) {
      return db.insert(publicVotesTable).values({ id });
    },
  };
}
