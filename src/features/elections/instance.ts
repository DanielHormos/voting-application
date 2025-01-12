import { db } from "@/db";
import { createService } from "./service";
import { representativeInstance } from "../representatives/instance";
import { publicVoteInstance } from "../public-voters";

export const electionInstance = createService(
  db,
  representativeInstance.getAllRepresentatives,
  representativeInstance.getRepresentativeById,
  publicVoteInstance.getPublicVoterDataById,
  publicVoteInstance.getPublicVoterData,
  representativeInstance.getRepresentativeVotesById
);
