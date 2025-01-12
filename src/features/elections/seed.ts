import { faker } from "@faker-js/faker";
import { electionInstance } from "./instance";
export async function seedElectionTable() {
  for (let i = 0; i < 10; i++) {
    await electionInstance.addElection({
      title: `Election ${i}`,
      status: "ongoing",
      choices: [faker.book.title(), faker.book.title(), faker.book.title()],
    });
  }
}
