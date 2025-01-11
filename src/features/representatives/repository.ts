import { Db } from "@/db";
import { representativesTable } from "@/features/representatives/schema";
import { RepresentativeInsert } from "@/db/types";

export function createRepository(db: Db) {
  return {
    async getAllRepresentatives() {
      return await db.select().from(representativesTable);
    },

    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      return await db.insert(representativesTable).values({
        fullname,
        email,
      });
    },
  };
}
