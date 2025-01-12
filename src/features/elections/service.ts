import { Db } from "@/db";
import { createRepository } from "./repository";
import {
  ElectionPreferenceInsert,
  ElectionInsert,
  ElectionVoteInsert,
  ElectionWinnerInsert,
} from "./schema";
import { electionSchema } from "./validation";
import { representativeFeature } from "../representatives/instance";

export function createService(
  db: Db,
  getPublicVoter: (voterId: string) => Promise<string[]>,
  getPublicVoterData: typeof representativeFeature.getPublicVoteData,
  getAllRepresentatives: typeof representativeFeature.getAllRepresentatives,
  getRepresentativeVotes: typeof representativeFeature.getRepresentativeVotesById,
  getRepresentative: typeof representativeFeature.getRepresentativeById
) {
  const repository = createRepository(db);
  async function getTotalVotes(representativeId: string): Promise<number> {
    const votes = await getRepresentativeVotes(representativeId);
    return votes[0]?.totalVotes?.totalVotes || 0;
  }
  return {
    async getPublicVoterData() {
      return await getPublicVoterData();
    },
    async getAllRepresentatives() {
      return await getAllRepresentatives();
    },
    async getAllElections() {
      return await repository.getAllElections();
    },

    async addElection(election: ElectionInsert) {
      const electionData = electionSchema.safeParse(election);

      if (!electionData.success) {
        throw new Error("Invalid election formdata");
      }
      await repository.addElection(electionData.data);
    },

    async addRepresentativeVote(vote: ElectionVoteInsert) {
      const totalVotes = await getTotalVotes(vote.representativeId);

      return repository.addRepresentativeVote({
        ...vote,
        totalVotes,
      });
    },

    async addPublicPreference(vote: ElectionPreferenceInsert) {
      const voter = await getPublicVoter(vote.voterId);
      if (voter.length === 0) {
        throw new Error("Voter not found");
      }
      return await repository.addPublicPreference(vote);
    },
    async concludeElection(electionId: string) {
      return await repository.updateElectionStatus(electionId);
    },
    async getConcludedElectionData() {
      return await repository.getConcludedElectionData();
    },

    async addElectionWinner(electionId: string, title: string, time: Date) {
      const election = await repository.getElectionById(electionId);
      const electionWinner = await repository.getElectionWinner(electionId);
      const representative = await getRepresentative(
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
