import { VscGithubInverted } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center m-3 md:m-5 md:ml-10 md:mt-6 gap-4 md:text-xl lg:text-2xl text-lg font-medium">
        <FaTools className="lg:text-3xl md:text-2xl sm:text-xl  text-green-600" />
        <p>Muli-tools</p>
      </Link>

      <div className="flex items-center md:mr-12">
        <a
          href="https://github.com/Soufi-ane/multi-tools"
          className="flex items-center gap-2 cursor-pointer  hover:bg-white transition-all duration-100 px-4 py-2  rounded-md justify-center sm:text-lg text-base">
          <VscGithubInverted />
          <span>Github</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
