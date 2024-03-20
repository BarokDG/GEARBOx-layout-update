import Chip from "./Chip";
import TrialCard from "./TrialCard";
import { data } from "../lib/data";

export default function Main() {
  return (
    <main>
      <div className="flex gap-2.5">
        <div className="w-[350px] flex-shrink-0"></div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <Chip title="Matched" count={2} active />
            <Chip title="Undetermined" count={8} />
            <Chip title="Unmatched" count={16} />
          </div>

          <div className="grid grid-cols-3 content-start items-center justify-items-start gap-2.5">
            {data.map((trial) => (
              <TrialCard key={trial.id} {...trial} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
