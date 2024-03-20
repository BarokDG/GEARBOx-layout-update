import { Trial } from "../lib/types";

export default function TrialCard({ name, title }: Trial) {
  return (
    <div className="flex h-[251px] w-[421px] flex-col gap-2.5 bg-gray-200 p-5">
      <h2 className="text-lg font-bold">{name}</h2>

      <div>
        <h3 className="text-sm ">Title</h3>
        <p>{title}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1">
        <button className="flex-grow bg-white py-3">View more</button>
        <button className="flex-grow border border-black py-3">
          clinicaltrials.gov
        </button>
      </div>
    </div>
  );
}
