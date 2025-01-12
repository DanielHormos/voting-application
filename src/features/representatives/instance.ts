import { db } from "@/db";
import { publicVoteInstance } from "../public-voters/instance";
import { createService } from "./service";

export const representativeInstance = createService(
  db,
  publicVoteInstance.getPublicVoterData
);
