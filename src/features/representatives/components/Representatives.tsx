import { representativeInstance } from "../instance";
import { RepresentativeCard } from "./RepresentativeCard";

export async function Representatives() {
  const representatives = await representativeInstance.getAllRepresentatives();

  return (
    <div>
      {representatives.map((representer) => {
        return (
          <RepresentativeCard
            key={representer.id}
            name={representer.fullname}
            email={representer.email}
            votes={representer.totalVotes as number}
            representativeId={representer.id}
          />
        );
      })}
    </div>
  );
}
