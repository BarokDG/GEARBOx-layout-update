import { useState } from "react";

import Accordion from "./Accordion";
import Chip from "./Chip";
import TrialCard from "./TrialCard";
import TrialDetailsModal from "./TrialDetailsModal";
import { data } from "../lib/data";
import type { Trial } from "../lib/types";

export default function Main() {
  const [selectedTrial, setSelectedTrial] = useState<Trial | null>(null);

  return (
    <main className="mt-6 flex-grow px-6">
      <div className="flex gap-5">
        <form className="flex w-[350px] flex-shrink-0 flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="text-primary text-lg font-bold">
              {" "}
              PATIENT INFORMATION
            </h1>
          </div>

          <Accordion title="Demographics" defaultOpen>
            <div className="flex flex-col gap-2">
              <label htmlFor="age">
                What is the patient's current age (in years)?
              </label>
              <input
                type="number"
                min={0}
                max={150}
                id="age"
                name="age"
                className="h-10 self-start border border-black px-2.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sex">What is the patient's biological sex?</label>

              <div className="flex gap-10">
                <div className="flex gap-1">
                  <input type="radio" name="sex" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="sex" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="Disease" />
          <Accordion title="Treatment and Exposure" />
          <Accordion title="Organ Function" />
          <Accordion title="Biomarkers" />
        </form>

        <div className="flex flex-grow flex-col gap-2.5">
          <div className="flex gap-2.5">
            <Chip title="Matched" count={2} active />
            <Chip title="Undetermined" count={8} />
            <Chip title="Unmatched" count={16} />
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] place-content-center gap-2.5">
            {data.map((trial) => (
              <TrialCard
                key={trial.id}
                {...trial}
                onSelectTrial={() => setSelectedTrial(trial)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedTrial && (
        <TrialDetailsModal
          {...selectedTrial}
          onCloseModal={() => setSelectedTrial(null)}
        />
      )}
    </main>
  );
}
