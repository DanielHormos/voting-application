export function createPublicVoteService(db: Db) {
  const repository = createPublicVoteRepository(db);
  return {
    async getPublicVoteData() {
      return repository.getPublicVoteData();
    },
    async getPublicVoteDataById(id) {
      return repository.getPublicVoteDataById(id);
    },
    async addPublicVoteById(id) {
      return repository.addPublicVoteById(id);
    },
  };
}
