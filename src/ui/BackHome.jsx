import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function BackHome() {
  return (
    <Link
      className="flex items-center absolute left-3 md:left-5 top-2 md:top-4 hover:bg-stone-100 py-2 md:px-4 px-2 rounded-md"
      to="/">
      <IoChevronBackOutline />
      <span>Go back</span>
    </Link>
  );
}

export default BackHome;
