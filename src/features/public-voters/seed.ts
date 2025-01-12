import { publicVoteInstance } from "./instance";

export function seedPublicVoter() {
  return publicVoteInstance.addPublicVoteById(
    "097321ab-0963-4be8-9442-fc13705dcc0e"
  );
}
