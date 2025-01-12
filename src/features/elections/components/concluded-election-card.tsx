type ConcludedElection = {
  title: string;
  name: string;
  email: string;
  winnerChoice: string;
};
export function ConcludedElectionCard({
  title,
  name,
  email,
  winnerChoice,
}: ConcludedElection) {
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Winner Choice: {winnerChoice}</p>
        </div>
      </div>
    </div>
  );
}
