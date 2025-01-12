import { electionInstance } from "../instance";
import { ElectionCard } from "./ElectionCard";

export async function Elections() {
  const elections = await electionInstance.getAllElections();

  return (
    <div>
      {elections.map((election) => {
        return (
          <ElectionCard
            key={election.id}
            title={election.title}
            status={election.status}
            choices={election.choices}
          />
        );
      })}
    </div>
  );
}
