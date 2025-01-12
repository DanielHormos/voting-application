import { db } from "@/db";
import { createPublicVoteService } from "./service";

export const publicVoteInstance = createPublicVoteService(db);
