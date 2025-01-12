"use client";

import { addElectionAction } from "../actions";

export function AddElectionForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        action={addElectionAction}
        className="flex flex-col items-center p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Add Election</h2>

        <label htmlFor="title" className="w-full text-left mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter title"
          required
          className="w-full p-2 mb-4 rounded-md border"
        />

        <label htmlFor="choices" className="w-full text-left mb-2 font-medium">
          Choices (comma separated)
        </label>
        <input
          id="choices"
          type="text"
          name="choices"
          placeholder="Enter choices"
          required
          className="w-full p-2 mb-4 rounded-md border"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Add Election
        </button>
      </form>
    </div>
  );
}
