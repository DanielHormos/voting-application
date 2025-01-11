import { RepresentativeInsert } from "./types";
import { createRepository } from "./repository";
import { Db } from "@/db";

export function createService(
  db: Db,
  getPublicVoteData: typeof publicVoteService.getPublicVoteData,
  getPublicVoteDataById: typeof publicVoteService.getPublicVoteDataById
) {
  const repository = createRepository(db);
  return {
    async getAllRepresentatives() {
      return await repository.getAllRepresentatives();
    },
    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      return await repository.addRepresentative({ fullname, email });
    },

    async getRepresentativeById(id: string) {
      return await repository.getRepresentativeById(id);
    },
    async getRepresentativeVotesById(id: string) {
      return await repository.getRepresentativeVotesById(id);
    },
    async addPublicVote(representativeId: string, publicVoteId: string) {
      const publicVoter = await getPublicVoteDataById(publicVoteId);
      if (!publicVoter) {
        throw new Error("Public voter not found");
      }
      const checkIfPublicVoterVoted = await repository.checkIfPublicVoterVoted(
        representativeId,
        publicVoteId
      );
      if (checkIfPublicVoterVoted) {
        throw new Error("Public voter already voted");
      }
      await repository.addPublicVote(representativeId, publicVoteId);
    },
    async getPublicVoteData() {
      return await getPublicVoteData();
    },
  };
}
