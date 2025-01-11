export function createPublicVoteRepository(db: Db) {
  return {
    async getPublicVoteData() {
      return db.select().from(publicVotesTable);
    },
    async getPublicVoteDataById(id: string) {
      const publicVote = await db
        .select({ id: publicVotesTable.id })
        .from(publicVotesTable)
        .where(eq(publicVotesTable.id, id));

      return publicVote.map((vote) => vote.id);
    },
    async addPublicVoterById(id: string) {
      return db.insert(publicVotersTable).values({ id });
    },
  };
}
