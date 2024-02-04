import QRCode from "qrcode.react";
import { useState } from "react";
import BackHome from "../ui/BackHome";

function Qrcode() {
  const [link, setLink] = useState("");
  const [Value, setValue] = useState("This is just a placeholder");
  const [converted, setConverted] = useState(false);

  function HandleConvert(e) {
    e.preventDefault();
    if (!link) return;
    setValue(link);
    setLink("");
  }

  return (
    <div className="bg-white w-11/12 md:w-9/12 h-[90%] mx-auto mt-10 rounded-md relative flex flex-col gap-16 py-16 px-32 items-center">
      <BackHome />
      <form
        className="flex flex-col md:flex-row items-center gap-5"
        onSubmit={(e) => HandleConvert(e)}>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border-2 py-2 px-3 rounded-lg w-72"
          type="text"
          placeholder="Text to covert ..(www.example.com)"
        />

        <button className="bg-stone-100 hover:bg-stone-200  transition-all px-6 py-2.5 rounded-md">
          Convert
        </button>
      </form>
      <div className="border-2 w-72 h-72 flex items-center justify-center -order-1 md:order-2">
        <QRCode size={230} value={Value} />
      </div>
    </div>
  );
}

export default Qrcode;
