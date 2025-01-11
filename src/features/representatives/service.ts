import { RepresentativeInsert } from "./types";
import { createRepository } from "./repository";
import { Db } from "@/db";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      const existingRepresentative = await repository.getAllRepresentatives();

      const doesEmailExist = existingRepresentative.some((representative) => {
        return representative.email === email;
      });

      if (doesEmailExist) {
        console.log("Email already exists");
        throw new Error("Email already exists");
      }
      return await repository.addRepresentative({ fullname, email });
    },

    async getAllRepresentatives() {
      return await repository.getAllRepresentatives();
    },

    // async voteRepresentative(id: number) {
    //   return await repository.voteRepresentative(id);
    // },
  };
}
