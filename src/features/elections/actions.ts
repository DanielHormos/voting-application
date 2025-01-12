"use server";

import { revalidatePath } from "next/cache";
import { electionInstance } from "./instance";

export async function addElection(data: FormData) {
  const title = data.get("title") as string;
  const choices = (data.get("choices") as string).split(",");

  const election = {
    title,
    status: "ongoing",
    choices,
  };

  await electionInstance.addElection(election);
  revalidatePath("/elections");
}

export async function fetchElections() {
  return await electionInstance.getAllElections();
}

export async function concludeElection(electionId: string, title: string) {
  await electionInstance.endElection(electionId);
  await electionInstance.addElectionWinner(electionId, title);
  revalidatePath("/elections");
}

export async function addElectionVote(
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

export async function addElectionPreference(
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
