import type { Trial } from "../lib/types";

export default function TrialDetailsModal({
  name,
  title,
  description,
  additionalInfo,
  onCloseModal,
}: Trial & { onCloseModal: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 h-5/6 w-full rounded-t-3xl bg-white p-16 shadow-[0_-4px_8px_rgba(0,0,0,25%)]">
      <button
        className="absolute right-5 top-5 h-8 w-8 rounded-full bg-gray-200"
        onClick={onCloseModal}
      >
        X
      </button>

      <div className="flex w-1/2 flex-col gap-5">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-sm font-bold">Title</h2>
          <p>{title}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-sm font-bold">Description</h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary text-sm font-bold">
            {additionalInfo?.title}
          </h2>
          <p>{additionalInfo?.description}</p>
        </div>
      </div>
    </div>
  );
}