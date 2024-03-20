import { data } from "../lib/data";
import TrialCard from "./TrialCard";

export default function Main() {
  return (
    <>
      {data.map((trial) => (
        <TrialCard key={trial.id} {...trial} />
      ))}
    </>
  );
}
