import { voteRepresentative } from "../action";
import { Representative } from "../types";

export function RepresentativeCard({ representatives }) {
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      {representatives.map((representer: Representative) => (
        <div
          key={representer.id}
          className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden"
        >
          <div className="card-body">
            <h2 className="card-title">{representer.fullname}</h2>
            <p className="text-lg text-base-content">{representer.email}</p>
            <button onClick={() => voteRepresentative(representatives.id)}>
              Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
