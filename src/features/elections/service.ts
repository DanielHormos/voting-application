import { Db } from "@/db";
import { publicVoteInstance } from "../public-voters";
import { representativeInstance } from "../representatives/instance";
import { createRepository } from "./repository";
import {
  ElectionInsert,
  ElectionPreferenceInsert,
  ElectionVoteInsert,
} from "./schema";
import { electionSchema } from "./validation";

export function createService(
  db: Db,
  getRepresentativeById: typeof representativeInstance.getRepresentativeById,
  getAllRepresentatives: typeof representativeInstance.getAllRepresentatives,
  getRepresentativesVoteById: typeof representativeInstance.getRepresentativeVotesById,
  getPublicVoter: typeof publicVoteInstance.getPublicVoterDataById
) {
  const repository = createRepository(db);

  return {
    async getAllRepresentatives() {
      return await getAllRepresentatives();
    },
    async getAllElections() {
      return await repository.getAllElections();
    },

    async addElectionVote(vote: ElectionVoteInsert) {
      const voter = await getRepresentativeById(vote.representativeId);
      const votes = await getRepresentativesVoteById(vote.representativeId);

      const totalVotes = votes[0]?.totalVotes;
      if (voter.length === 0) {
        throw new Error("Voter not found");
      }
      return await repository.addRepresentativeVote({ ...vote, totalVotes });
    },

    async addElectionAction(election: ElectionInsert) {
      const electionData = electionSchema.safeParse(election);

      if (!electionData.success) {
        throw new Error("Invalid election formdata");
      }
      await repository.addElection(election);
    },

    async addPublicPreference(vote: ElectionPreferenceInsert) {
      const voter = await getPublicVoter(vote.voterId);
      if (voter.length === 0) {
        throw new Error("Voter not found");
      }
      return await repository.addPublicPreference(vote);
    },

    async concludeElection(electionId: string) {
      return await repository.concludeElection(electionId);
    },
    async getElectionWinner() {
      return await repository.getElectionWinner();
    },

    async getElectionWinnerChoice(electionId: string) {
      return await repository.getElectionWinnerChoice(electionId);
    },
    async addElectionWinner(electionId: string, title: string) {
      const election = await repository.getConcludedElectionDataById(
        electionId
      );
      const winnerRepresentative = await getRepresentativeById(
        election[0].representativeId
      );

      const electionWinner = {
        name: winnerRepresentative[0].fullname,
        email: winnerRepresentative[0].email,
        title: title,
        electionId,
        winnerChoice: election[0].choice,
      };

      return await repository.addElectionWinner(electionWinner);
    },
  };
}
