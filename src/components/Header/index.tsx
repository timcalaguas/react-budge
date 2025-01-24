import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-4 mb-3">
      <Link to={"/"} className="text-2xl font-bold text-white">
        BUDGE
      </Link>
    </header>
  );
}
