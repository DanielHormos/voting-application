"use server";

import { revalidatePath } from "next/cache";
import { representativeInstance } from "./instance";

export async function addRepresentative(data: FormData) {
  const fullname = data.get("fullname") as string;
  const email = data.get("email") as string;
  const representative = {
    fullname,
    email,
    public_votes: 0,
  };

  await representativeInstance.addRepresentative(representative);
  revalidatePath("/representatives");
}

export async function addPublicVote(representativeId: string) {
  const voterId = "5a04a31c-90f7-4625-af10-3fa77c3c615d";
  await representativeInstance.addPublicVote(representativeId, voterId);
  revalidatePath("/representatives");
}
