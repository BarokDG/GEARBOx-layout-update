import GEARBOxSVG from "../assets/logo.svg";
import UserIcon from "./UserIcon";

export default function NavBar() {
  return (
    <header className="relative flex items-start gap-3 px-4 py-3">
      <div className="-mt-1 bg-white px-1">
        <img src={GEARBOxSVG} alt="GEARBOx" className="max-h-12" />
      </div>

      <a href="#" className="text-primary px-4 text-xs">
        ABOUT GEARBOx
      </a>

      <div className="bg-primary ml-auto flex h-10 w-10 items-center justify-center rounded-full">
        <UserIcon className="text-white" />
      </div>

      <div className="border-b-primary absolute left-0 top-10 -z-10 w-full border-b" />
    </header>
  );
}
