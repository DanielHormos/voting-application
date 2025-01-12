import { db } from "@/db";
import { publicVoteInstance } from "../public-voters";
import { representativeInstance } from "../representatives/instance";
import { createService } from "./service";

export const electionInstance = createService(
  db,
  representativeInstance.getRepresentativeById,
  representativeInstance.getAllRepresentatives,
  representativeInstance.getRepresentativeVotesById,
  publicVoteInstance.getPublicVoterById
);
