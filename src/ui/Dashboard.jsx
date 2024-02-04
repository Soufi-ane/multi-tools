import { BsQrCode } from "react-icons/bs";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Qr code",
    description: "Covernt texts adn links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
];

function Dashboard() {
  return (
    <div className="sm:px-40 px-6 py-20 grid grid-cols-2 grid-rows-4 gap-y-7 place-items-center sm:gap-x-40  lg:gap-x-60 md:gap-x-60 md:pr-36 md:grid-cols-3 lg:grid-cols-4 xl:px-60 2xl:grid-cols-5  ">
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;

function Item({ item }) {
  const { page, name, description, icon } = item;
  return (
    <Link
      to={page}
      className="bg-white inline-block sm:w-52  w-10/12 p-5 rounded-md cursor-pointer hover:scale-103  transition-all">
      <div className="flex items-center gap-3 font-medium">
        <span className="sm:text-3xl text-2xl">{icon}</span>
        <p>{name}</p>
      </div>
      {description}
    </Link>
  );
}
