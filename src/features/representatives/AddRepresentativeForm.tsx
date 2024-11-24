import { useState } from "react";
import { RepresentativeFormData, representativeSchema } from "./formValidation";
import { representativeFeature } from "./instance";

export function AddRepresentativeForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  async function submitForm(event: React.FormEvent) {
    event.preventDefault();

    const validatedData: RepresentativeFormData = representativeSchema.parse({
      fullname,
      email,
    });

    await representativeFeature.AddRepresentative(validatedData);

    setFullname("");
    setEmail("");
  }

  return (
    <form className="flex flex-col items-center  p-6  max-w-md">
      <h2 className="text-2xl font-bold ">Add Representative</h2>

      <label htmlFor="full-name" className="w-full text-left mb-2 ">
        Full Name
      </label>
      <input
        id="fullname"
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        placeholder="Enter full name"
        className="w-full p-2 mb-4 rounded-md border"
      />

      <label htmlFor="email" className="w-full text-left mb-2  font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="w-full p-2 mb-4 rounded-md border  "
      />

      <button
        type="submit"
        className="mt-4 py-2 border border-white rounded-md"
        onClick={submitForm}
      >
        Add Representative
      </button>
    </form>
  );
}
