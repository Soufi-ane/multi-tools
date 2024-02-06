import { BsQrCode, BsCurrencyExchange } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";

import { Link } from "react-router-dom";

const items = [
  {
    name: "Qr code maker",
    description: "Convert your links into Qr codes",
    icon: <BsQrCode />,
    page: "/qr-code",
  },
  {
    name: "Currency converter",
    description: "Convert between currencies",
    icon: <BsCurrencyExchange className="text-green-500" />,
    page: "/currency-converter",
  },
  {
    name: "Text translator",
    description: "Translate from any language to another",
    icon: <MdGTranslate className="text-blue-500" />,
    page: "/text-translator",
  },
];

function Dashboard() {
  return (
    <div className="sm:px-40 px-1 py-20 grid grid-cols-2 grid-rows-4 gap-y-7 place-items-center sm:gap-x-40  lg:gap-x-60 md:gap-x-60 md:pr-36 md:grid-cols-3 lg:grid-cols-4 xl:px-60 2xl:grid-cols-5  ">
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
      className="bg-white space-y-1 md:space-y-5 inline-block sm:w-52 h-[7.5rem] sm:h-36  w-10/12  p-3 sm:p-5 rounded-md cursor-pointer hover:scale-103  transition-all ">
      <div className="flex items-center gap-3 font-medium h-12">
        <span className="sm:text-3xl text-xl">{icon}</span>
        <p>{name}</p>
      </div>
      <div className="text-xs sm:text-sm text-stone-700">{description}</div>
    </Link>
  );
}
