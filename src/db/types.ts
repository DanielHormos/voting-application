import { representativesTable } from "../features/representatives/schema";

export type RepresentativeInsert = typeof representativesTable.$inferInsert;
export type RepresentativeSelect = typeof representativesTable.$inferSelect;
