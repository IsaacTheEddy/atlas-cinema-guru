import Filter from "@/components/FIlter";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mt-5 flex-row ">
        <h1 className="text-3xl">Home</h1>
      </div>
      {/* Filter Goes Here */}
      <div className="flex w-full">
        <Filter />
      </div>
    </div>
  );
}
