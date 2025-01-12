import {
  seedElectionTable,
  seedPublicVoter,
  seedRepresentativesTable,
} from "@/features";

seedPublicVoter()
  .then(() => {
    console.log("Public voter seeded");
  })
  .then(() => {
    return seedRepresentativesTable().then(() => {
      console.log("Representatives seeded");
    });
  })
  .then(() => {
    return seedElectionTable().then(() => {
      console.log("Election seeded");
    });
  });
