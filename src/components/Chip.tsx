interface Props {
  active?: boolean;
  count: number;
  title: string;
}

export default function Chip({ active = false, count, title }: Props) {
  return (
    <button
      className={`rounded-full py-1 pl-3 pr-1.5 text-sm ${active ? "bg-primary" : "bg-gray-300"}`}
    >
      <span className={`${active ? "font-bold text-white" : "text-inherit"}`}>
        {title}
      </span>
      <span className="ml-2.5 inline-block h-max rounded-full bg-white px-1 py-0.5 leading-3">
        {count}
      </span>
    </button>
  );
}
