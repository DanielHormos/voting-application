import { publicVoteInstance } from "./instance";
import { faker } from "@faker-js/faker";

export async function seedPublicVotesTable() {
  for (let i = 0; i < 25; i++) {
    const publicVote = {
      id: faker.string.uuid(),
    };
    await publicVoteInstance.addPublicVoteById(publicVote.id);
  }
}

export function seedPublicVotesTableWithDefaultId() {
  return publicVoteInstance.addPublicVoteById(
    "b2daf6b7-75a3-46b6-bd5c-3fa3f173a967"
  );
}
