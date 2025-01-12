import { z } from "zod";

export const electionSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  choices: z.string().min(3, "Choice must be at least 3 characters long"),
});
