import { createRepository } from "./repository";
import { Db } from "@/db";
import { publicVoteInstance } from "../public-voters/instance";
import { RepresentativeInsert } from "./schema";

export function createService(
  db: Db,
  getPublicVoteData: typeof publicVoteInstance.getPublicVoteData
) {
  const repository = createRepository(db);
  return {
    async getPublicVoteData() {
      return await getPublicVoteData;
    },
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
      const voters = await getPublicVoteData();
      const publicVoter = voters.find((voter) => voter.id === publicVoteId);
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
  };
}
