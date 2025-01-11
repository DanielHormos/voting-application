import { db } from "@/db";
import { createService } from "./service";

export const representativeFeature = createService(db);
