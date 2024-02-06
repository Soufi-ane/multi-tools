import { useEffect, useState } from "react";
import Container from "../ui/Container";
import BackHome from "../ui/BackHome";

function TextTranslator() {
  const [base, setBase] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("ar");
  const [translated, setTranslated] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(
    function () {
      async function getTranslation() {
        setIsTranslating(true);
        const res = await fetch(
          `https://655.mtis.workers.dev/translate?text=${base}&source_lang=${from}&target_lang=${to}`
        );
        const data = await res.json();
        setIsTranslating(false);
        setTranslated(data.response.translated_text);
      }
      getTranslation();
    },
    [base, from, to]
  );

  return (
    <Container className="mt-5">
      <BackHome />

      <div className="flex items-center gap-3 justify-center">
        <p className="hidden lg:inline">Translate from</p>
        <select className="py-1.5 px-3 rounded-md" name="from">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="es">Spanish</option>

          <option value="fr">French</option>
        </select>
        <p>to</p>
        <select className="py-1.5 px-3 rounded-md" name="to">
          <option value="es">Spanish</option>
          <option value="ar">Arabic</option>
          <option value="en">Enlish</option>

          <option value="fr">French</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-5 xl:gap-10">
        <textarea
          value={base}
          onChange={(e) => setBase(e.target.value)}
          className="border-2 h-[15rem] w-[19rem] md:w-[17rem] xl:w-[25rem] 2xl:w-[30rem] p-2 rounded-md resize-none"
          type="text"
          placeholder="Type something to translate ..."
        />
        <div className="border-2 p-2 h-[15rem] md:w-[17rem] w-[19rem] xl:w-[25rem] 2xl:w-[30rem] rounded-md">
          {base && !isTranslating && { translated }}
          {base && isTranslating && "Translating ..."}
          {!base && "Nothin to translate yet..."}
        </div>
      </div>
    </Container>
  );
}

export default TextTranslator;
