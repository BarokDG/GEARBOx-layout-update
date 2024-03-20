import { Trial } from "../lib/types";

export default function TrialCard({
  name,
  onSelectTrial,
  title,
  url,
}: Trial & { onSelectTrial: () => void }) {
  return (
    <div
      className="flex h-[251px] w-[421px] cursor-pointer flex-col gap-2.5 bg-gray-200 p-5"
      onClick={onSelectTrial}
    >
      <h2 className="text-lg font-bold">{name}</h2>

      <div>
        <h3 className="text-sm ">Title</h3>
        <p>{title}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1">
        <button
          className="flex-grow bg-white py-3"
          onClick={(e) => {
            e.stopPropagation();

            onSelectTrial();
          }}
        >
          View more
        </button>
        <a
          className="flex-grow border border-black py-3 text-center"
          href={url}
          target="_blank"
          referrerPolicy="no-referrer"
          onClick={(e) => e.stopPropagation()}
        >
          clinicaltrials.gov
        </a>
      </div>
    </div>
  );
}
