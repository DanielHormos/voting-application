import { faker } from "@faker-js/faker";
import { representativeInstance } from "./instance";

export async function seedRepresentativesTable() {
  for (let i = 0; i < 10; i++) {
    const representative = {
      id: faker.string.uuid(),
      fullname: faker.person.firstName() + " " + faker.person.lastName(),
      email: faker.internet.email(),
    };
    await representativeInstance.addRepresentative(representative);
  }
}

export async function seedRepresentativesVotesTable() {
  const publicVoters = await representativeInstance.getPublicVoteData();

  for (const voter of publicVoters) {
    const representatives =
      await representativeInstance.getAllRepresentatives();
    const randomRepresentative =
      representatives[Math.floor(Math.random() * representatives.length)];

    await representativeInstance.addPublicVote(
      randomRepresentative.id,
      voter.id
    );
  }
}
