import { Db } from "@/db";
import { createPublicVoteRepository } from "./repository";

export function createPublicVoteService(db: Db) {
  const repository = createPublicVoteRepository(db);
  return {
    async getPublicVoterById(id: string) {
      return repository.getPublicVoterById(id);
    },
    async getPublicVoter() {
      return repository.getPublicVoter();
    },
    async addPublicVoteById(id: string) {
      return repository.addPublicVoterById(id);
    },
  };
}
