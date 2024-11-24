import { representativeFeature } from "./instance";

export async function addRepresentative(fullname: string, email: string) {
  await representativeFeature.addRepresentative({ fullname, email });
}
