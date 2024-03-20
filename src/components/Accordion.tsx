import { useState } from "react";
import CaretIcon from "./icons/Caret";

interface Props {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  title: string;
}

export default function Accordion({
  children = null,
  defaultOpen = false,
  title,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex cursor-pointer items-center justify-between border-b border-b-black py-1.5">
        <h2 className="font-bold">{title}</h2>
        <button type="button" onClick={() => setOpen(!open)}>
          <CaretIcon
            className={`transition-transform ${open ? "text-primary rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && children}
    </div>
  );
}
