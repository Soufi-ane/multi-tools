import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { IoChevronBackOutline } from "react-icons/io5";

function PageNotFound() {
  return (
    <Container className="bg-stone-200 md:mt-32">
      <div className="">
        <h2 className="text-4xl mt-12 mb-10 text-center block w-[85vw]">Page not found</h2>

        <h4 className="text-lg text-center">{"The page you're looking for may not exist !"}</h4>
      </div>
      <Link className="bg-white py-2 px-4 rounded-md flex items-center gap-2 min-w-40" to="/">
        <IoChevronBackOutline />
        <span>Back Home</span>
      </Link>
    </Container>
  );
}

export default PageNotFound;
