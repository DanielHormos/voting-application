import { Db } from "@/db";
import { publicVoteInstance } from "../public-voters";
import { representativeInstance } from "../representatives/instance";
import { createRepository } from "./repository";
import {
  ElectionInsert,
  ElectionPreferenceInsert,
  ElectionVoteInsert,
  ElectionWinnerInsert,
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
    async getConcludedElectionData() {
      return await repository.getConcludedElectionData();
    },

    async addElectionWinner(electionId: string, title: string, time: Date) {
      const election = await repository.getElectionById(electionId);
      const electionWinner = await repository.getElectionWinner(electionId);
      const representative = await getRepresentativeById(
        electionWinner[0]?.representativeId
      );

      const winnerChoice = electionWinner[0]?.choice;

      const preferences = await repository.getElectionPreference(electionId);

      const winner: ElectionWinnerInsert = {
        electionId,
        name: representative.map(
          (representative) => representative.fullname
        )[0],
        title,
        time,
        email: representative.map((representative) => representative.email)[0],
        winnerChoice,
        choices: election[0]?.choices,
        total: preferences.length,
      };
      return repository.addElectionWinner(winner);
    },

    async getElectionWinnerChoice(electionId: string) {
      return await repository.getElectionWinnerChoice(electionId);
    },
  };
}
