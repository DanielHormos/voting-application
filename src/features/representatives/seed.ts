import { representativeInstance } from "./instance";

export async function seedRepresentativesTable() {
  await representativeInstance.addRepresentative({
    id: "e6af4689-426c-44ce-a1c1-ce290f3bb399",
    fullname: "Daniel Hormos",
    email: "daniel_danne32@hotmail.com",
  });
}
