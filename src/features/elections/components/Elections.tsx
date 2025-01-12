"use server";
import { electionInstance } from "../instance";
import { ElectionCard } from "./ElectionCard";

export async function Elections() {
  const election = await electionInstance.getAllElections();

  const elections = election.filter((election) => {
    return election.status === "ongoing";
  });

  return (
    <div className="flex flex-wrap -m-4">
      {elections.map((election) => {
        return (
          <ElectionCard
            key={election.id}
            id={election.id}
            title={election.title}
            status={election.status}
            choices={election.choices}
          />
        );
      })}
    </div>
  );
}
