import { representativeFeature } from "../instance";
import { RepresentativeCard } from "./RepresentativeCard";

export async function Representatives() {
  const representatives = await representativeFeature.getAllRepresentatives();

  return (
    <div>
      {representatives.map((representer) => {
        return (
          <RepresentativeCard
            key={representer.id}
            name={representer.fullname}
            email={representer.email}
          />
        );
      })}
    </div>
  );
}
