import { Db } from "@/db";
import { createRepository } from "./repository";
import { Election } from "./types";

export function createService(db: Db) {
  const repository = createRepository(db);

  return {
    async addElection(election: Election) {
      return repository.addElection(election);
    },
    async getAllElections() {
      return repository.getAllElections();
    },
  };
}
