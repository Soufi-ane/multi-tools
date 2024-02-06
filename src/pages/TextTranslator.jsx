import { useEffect, useState } from "react";
import Container from "../ui/Container";
import BackHome from "../ui/BackHome";

const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

function TextTranslator() {
  const [base, setBase] = useState("");
  const [translated, setTranslated] = useState("");

  useEffect(
    function () {
      async function getTranslation() {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            prompt: `Translate the following English text to French: "${base}"`,
            max_tokens: 100,
            n: 1,
          }),
        });
        const data = await res.json();
        console.log(data);
        // setTranslated(data.choices[0].text.trim());
      }
      getTranslation();
    },
    [base]
  );

  return (
    <Container className="mt-5">
      <BackHome />

      <div className="flex items-center gap-3 justify-center">
        <p className="hidden lg:inline">Translate from</p>
        <select className="py-1.5 px-3 rounded-md" name="from">
          <option value="">English</option>
          <option value="">Arabic</option>
          <option value="">Spanish</option>
          <option value="">Russian</option>
          <option value="">French</option>
        </select>
        <p>to</p>
        <select className="py-1.5 px-3 rounded-md" name="to">
          <option value="">Spanish</option>
          <option value="">Arabic</option>
          <option value="">Enlish</option>
          <option value="">Russian</option>
          <option value="">French</option>
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
          {base ? "Translating..." : "Nothing to translate yet..."}
        </div>
      </div>
    </Container>
  );
}

export default TextTranslator;
