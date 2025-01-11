import { db } from "@/db";
import { createService } from "./service";

export const electionFeature = createService(db);
