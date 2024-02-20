import QRCode from "qrcode.react";
import { useState } from "react";
import BackHome from "../ui/BackHome";
import Container from "../ui/Container";
import Button from "../ui/Button";

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
    <Container>
      <BackHome />

      <form
        className="flex flex-col md:flex-row items-center gap-5"
        onSubmit={(e) => HandleConvert(e)}>
        <input
          value={link}
          maxLength={500}
          onChange={(e) => setLink(e.target.value)}
          className="border-2 py-2 px-3 rounded-lg w-72 focus:outline-stone-400"
          type="text"
          placeholder="Text to covert ..(www.example.com)"
        />

        <Button>Convert</Button>
      </form>
      <div className="border-2 w-72 h-72 flex items-center justify-center -order-1 md:order-2">
        <QRCode size={230} value={Value} />
      </div>
    </Container>
  );
}

export default Qrcode;
