"use server";

import { revalidatePath } from "next/cache";
import { electionInstance } from "./instance";

export async function addElectionAction(data: FormData) {
  const title = data.get("title") as string;
  const choices = (data.get("choices") as string).split(",");

  const election = {
    title,
    status: "ongoing",
    choices,
  };

  await electionInstance.addElectionAction(election);
  revalidatePath("/elections");
}

export async function fetchElectionsAction() {
  return await electionInstance.getAllElections();
}

export async function concludeElectionAction(electionId: string) {
  await electionInstance.concludeElection(electionId);
  revalidatePath("/elections");
}

export async function addElectionVoteAction(
  electionId: string,
  electionChoice: string
) {
  const representativeId = "e6af4689-426c-44ce-a1c1-ce290f3bb399";

  const vote = {
    electionId,
    choice: electionChoice,
    representativeId,
  };

  await electionInstance.addElectionVote(vote);
  revalidatePath("/elections");
}

export async function addElectionPreferenceAction(
  electionId: string,
  preference: string
) {
  const voterId = "097321ab-0963-4be8-9442-fc13705dcc0e";
  const vote = {
    electionId,
    preference,
    voterId,
  };

  await electionInstance.addPublicPreference(vote);
  revalidatePath("/elections");
}
