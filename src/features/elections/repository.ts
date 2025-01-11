import { Db } from "@/db";
import { electionsTable } from "./schema";
import { ElectionInsert } from "./types";

export function createRepository(db: Db) {
  return {
    async getAllElections() {
      return await db.select().from(electionsTable);
    },
    async addElection(election: ElectionInsert) {
      return await db.insert(electionsTable).values(election);
    },
  };
}
