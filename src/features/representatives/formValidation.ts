import { z } from "zod";

export const representativeSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email adress").min(1, "Email is required"),
});

export type RepresentativeFormData = z.infer<typeof representativeSchema>;
