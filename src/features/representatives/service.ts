import { RepresentativeInsert } from "@/db/types";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async addRepresentative({ fullname, email }: RepresentativeInsert) {
      const existingRepresentative = await repository.fetchRepresentatives();

      const doesEmailExist = existingRepresentative.some((representative) => {
        return representative.email === email;
      });

      if (doesEmailExist) {
        console.log("Email already exists");
        throw new Error("Email already exists");
      }
      return await repository.addRepresentative({ fullname, email });
    },

    async fetchRepresentatives() {
      return await repository.fetchRepresentatives();
    },
  };
}
