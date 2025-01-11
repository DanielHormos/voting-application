"use server";

import { revalidatePath } from "next/cache";
import { electionFeature } from "./instance";

export async function addElection(data: FormData) {
  const title = data.get("title") as string;
  const choices = (data.get("choices") as string).split(",");

  const election = {
    title,
    status: "ongoing",
    choices,
  };

  await electionFeature.addElection(election);
  revalidatePath("/elections");
}

export async function fetchElections() {
  return await electionFeature.getAllElections();
}
