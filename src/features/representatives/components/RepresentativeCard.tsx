"use client";

import { addPublicVote } from "../action";

type Props = {
  name: string;
  email: string;
  votes: number;
  representativeId: string;
};

export function RepresentativeCard({
  name,
  email,
  representativeId,
  votes,
}: Props) {
  const castVote = async () => {
    await addPublicVote(representativeId);
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg text-base-content">{email}</p>
          <p className="text-lg text-base-content">{votes}</p>
          <button onClick={castVote}>Vote</button>
        </div>
      </div>
    </div>
  );
}
