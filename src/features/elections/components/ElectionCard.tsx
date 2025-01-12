"use client";

import { useState } from "react";
import {
  addElectionPreferenceAction,
  addElectionVoteAction,
  concludeElectionAction,
} from "../actions";
import { Election } from "../types";

export function ElectionCard({ title, status, choices, id }: Election) {
  const [choice, setChoice] = useState<string | null>(null);

  async function onConclude() {
    await concludeElectionAction(id, title);
    alert("Election concluded");
  }

  async function onVote() {
    if (!choice) {
      return;
    }
    await addElectionVoteAction(id, choice);
    alert("Voted");
  }
  async function onPreference() {
    if (!choice) {
      return;
    }
    await addElectionPreferenceAction(id, choice);
    alert("Preference added");
  }
  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4">
      <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-hidden">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Status: {status}</p>
        </div>
        <div className="card-body">
          <select
            onChange={(e) => setChoice(e.target.value)}
            className="select select-bordered"
          >
            <option disabled value="">
              Pick one
            </option>
            {choices.map((choice, index) => (
              <option key={index} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>
        <div className="card-actions flex-row justify-center p-4">
          <button onClick={onConclude} className="btn btn-primary">
            Conclude
          </button>
          <button onClick={onPreference} className="btn btn-primary">
            Chose preference
          </button>
          <button onClick={onVote} className="btn btn-primary">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
