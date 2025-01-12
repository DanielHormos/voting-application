import { db } from "@/db";
import { publicVoteInstance } from "../public-voters/instance";
import { createService } from "./service";

export const representativeFeature = createService(
  db,
  publicVoteInstance.getPublicVoteData
);
