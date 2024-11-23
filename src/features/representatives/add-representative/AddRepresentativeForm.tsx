export function AddRepresentativeForm() {
  return (
    <form className="flex flex-col items-center  p-6  max-w-md">
      <h2 className="text-2xl font-bold ">Add Representative</h2>

      <label htmlFor="full-name" className="w-full text-left mb-2 ">
        Full Name
      </label>
      <input
        id="full-name"
        type="text"
        placeholder="Enter full name"
        className="w-full p-2 mb-4 rounded-md border"
      />

      <label htmlFor="email" className="w-full text-left mb-2  font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter email"
        className="w-full p-2 mb-4 rounded-md border  "
      />

      <button
        type="submit"
        className="mt-4 py-2 border border-white rounded-md"
      >
        Add Representative
      </button>
    </form>
  );
}
