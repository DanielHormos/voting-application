import { Db } from "@/db";
import { createPublicVoteRepository } from "./repository";

export function createPublicVoteService(db: Db) {
  const repository = createPublicVoteRepository(db);
  return {
    async getPublicVoteData() {
      return repository.getPublicVoteData();
    },
    async addPublicVoteById(id: string) {
      return repository.addPublicVoterById(id);
    },
  };
}
