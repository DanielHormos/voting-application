import { electionInstance } from "../instance";
import { ConcludedElectionCard } from "./concluded-election-card";

export async function ConcludeElection() {
  const elections = await electionInstance.getElectionWinner();

  return (
    <div className="flex flex-wrap -m-4">
      {elections.map((election) => {
        return (
          <ConcludedElectionCard
            key={election.id}
            title={election.title}
            name={election.name}
            email={election.email}
            winnerChoice={election.winnerChoice}
          />
        );
      })}
    </div>
  );
}
