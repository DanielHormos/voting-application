import { Db } from "@/db";
import { createPublicVoteRepository } from "./repository";

export function createPublicVoteService(db: Db) {
  const repository = createPublicVoteRepository(db);
  return {
    async getPublicVoterDataById(id: string) {
      return repository.getPublicVoterDataById(id);
    },
    async getPublicVoterData() {
      return repository.getPublicVoteData();
    },
    async addPublicVoteById(id: string) {
      return repository.addPublicVoterById(id);
    },
  };
}
