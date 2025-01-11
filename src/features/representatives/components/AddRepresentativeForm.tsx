import { addRepresentative } from "../action";

export function AddRepresentativeForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={addRepresentative}
        className="flex flex-col items-center p-6 max-w-md"
      >
        <h2 className="text-2xl font-bold">Add Representative</h2>

        <label htmlFor="fullname" className="w-full text-left mb-2">
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Enter full name"
          required
          className="w-full p-2 mb-4 rounded-md border"
        />

        <label htmlFor="email" className="w-full text-left mb-2 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-full p-2 mb-4 rounded-md border"
        />

        <button
          type="submit"
          className="mt-4 py-2 border border-white rounded-md"
        >
          Add Representative
        </button>
      </form>
    </div>
  );
}

export default AddRepresentativeForm;
