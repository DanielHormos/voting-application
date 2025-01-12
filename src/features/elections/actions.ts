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
