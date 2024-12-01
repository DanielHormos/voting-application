"use server";

import { revalidatePath } from "next/cache";
import { representativeFeature } from "./instance";

export async function addRepresentative(data: FormData) {
  const fullname = data.get("fullname") as string;
  const email = data.get("email") as string;
  const representative = {
    fullname,
    email,
    public_votes: 0,
  };

  await representativeFeature.addRepresentative(representative);
  revalidatePath("/representatives");
}

export async function fetchRepresentatives() {
  return await representativeFeature.fetchRepresentatives();
}
