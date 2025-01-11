import { Election } from "../types";

export function ElectionCard({ title, status, choices }: Election) {
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Status: {status}</p>
          <p>Choices: {choices.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
