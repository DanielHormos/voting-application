import { db } from "@/db/db";
import { representativesTable } from "@/features/representatives/schema";
import { RepresentativeInsert } from "@/db/types";

export function createRepository() {
  return {
    async fetchRepresentatives() {
      try {
        return await db.select().from(representativesTable);
      } catch (error) {
        console.error("Failed to fetch representatives:", error);
        throw new Error("Unable to fetch representatives");
      }
    },

    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      try {
        return await db.insert(representativesTable).values({
          fullname,
          email,
        });
      } catch (error) {
        console.error("Failed to add representative:", error);
        throw new Error("Unable to add representative");
      }
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
