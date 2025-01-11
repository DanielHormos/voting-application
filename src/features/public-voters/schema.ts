export const publicVotesTable = pgTable("public_votes", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
});

export const publicVoteInsert = typeof publicVotesTable.$inferInsert;
export const publicVoteSelect = typeof publicVotesTable.$inferSelect;
