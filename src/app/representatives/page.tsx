import AddRepresentativeForm from "@/features/representatives/AddRepresentativeForm";
import { RepresentativeCard } from "@/features/representatives/RepresentativeCard";
import { fetchRepresentatives } from "@/features/representatives/action";

export default async function Page() {
  const representative = await fetchRepresentatives();

  return (
    <>
      <div className="flex justify-center">
        <AddRepresentativeForm />
      </div>
      <div className="flex justify-center w-full">
        <h1>All Representatives</h1>
        <RepresentativeCard representatives={representative} />
      </div>
    </>
  );
}
