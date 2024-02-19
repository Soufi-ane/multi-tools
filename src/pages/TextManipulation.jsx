import Container from "../ui/Container";
import BackHome from "../ui/BackHome";
import Button from "../ui/Button";
import { MdOutlineContentCopy } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Backspace"];
function TextManipulation() {
  const [times, setTimes] = useState(1);
  const [seperator, setSeperator] = useState("1");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [costum, setCostum] = useState("");
  function getLowerCase() {
    let lower;
    if (!text.length) lower = "";
    else lower = text.toLowerCase();

    setResult(lower);
    divRef.current.innerHTML = lower;
  }
  function getUpperCase() {
    let upper;
    if (!text.length) upper = "";
    else upper = text.toUpperCase();
    setResult(upper);
    divRef.current.innerHTML = upper;
  }
  function getCapitalize() {
    let capitalized = "";
    if (!text.length) {
      capitalized = "";
    } else {
      let capital = [""];
      text
        .split(" ")
        .forEach(
          (word) =>
            (capital = [...capital, word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()])
        );
      capitalized = capital.join(" ").slice(1);
    }

    setResult(capitalized);

    divRef.current.innerHTML = capitalized;
  }
  function getRepeat() {
    let repeated = "";
    if (!text.length) {
      repeated = "";
    } else {
      for (let i = 0; i < (times || 1); i++) {
        if (seperator == "1") repeated += `<div>${text}</div>`;

        if (seperator == "2") repeated += `${text} `;

        if (seperator == "3") repeated += `<span>${text}<span>${costum}</span></span>`;

        // if (seperator.length) repeated += seperator;
      }
    }

    setResult(repeated);

    divRef.current.innerHTML = repeated;
  }

  function handleTimes(e) {
    if (
      (times.length > 4 && !allowedKeys.includes(e.key)) ||
      e.key === "-" ||
      e.code === "Minus" ||
      e.code === "KeyE" ||
      e.key === "e"
    ) {
      e.preventDefault();
    }
  }

  function HandleCopy() {
    if (!divRef.current.innerText.length) {
      toast.dismiss();
      toast.error("Nothing there to copy !");
    } else {
      navigator.clipboard
        .writeText(divRef.current.innerText)
        .then(() => {
          toast.dismiss();
          toast.success("Copied to clipboard");
        })
        .catch(() => {
          toast.dismiss();
          toast.error("Failed to copy to clipboard");
        });
    }
  }
  function CheckEnter(e) {
    if (e.key === "Enter") {
      textAreaRef.current.blur();
    }
  }
  const textAreaRef = useRef();
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(
    function () {
      if (inputRef.current) inputRef.current.focus();
    },
    [seperator]
  );
  return (
    <Container className=" gap-5 md:gap-10 lg:gap-16 ">
      <BackHome />

      <div className="flex w-[80vw] flex-wrap items-center gap-3 justify-center order-2">
        <Button onClick={getUpperCase}>Uppercase</Button>
        <Button onClick={getLowerCase}>Lowercase</Button>
        <Button onClick={getCapitalize}>Capitalize</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-5 xl:gap-10">
        <textarea
          className="border-2 h-[10rem] md:h-[15rem] w-[19rem] md:w-[17rem] lg:w-[22rem] xl:w-[25rem] 2xl:w-[30rem] p-2 rounded-md resize-none"
          placeholder="Type something ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={CheckEnter}
          ref={textAreaRef}
        />

        <div className="relative ">
          <div
            className="border-2 h-[10rem] md:h-[15rem] w-[19rem] md:w-[17rem] lg:w-[22rem] xl:w-[25rem] 2xl:w-[30rem] p-2 rounded-md resize-none break-all overflow-x-hidden test"

            // onChange={(e) => setResult(e.target.value)}
          >
            <span className="text-stone-600" ref={divRef}></span>

            <Toaster />
          </div>
          <button
            onClick={HandleCopy}
            className="w-8 h-8 absolute top-3 right-3 border-2 border-stone-300 rounded-md bg-stone-200 p-2 hover:bg-stone-300 shadow-md shadow-stone-300 ">
            <MdOutlineContentCopy />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 sm:flex items-center justify-center gap-2 md:gap-3 sm:w-[75vw] md:w-[70vw] lg:w-[55vw] w-[290px] order-last">
        <span className="flex items-center  lg:min-w-[10.5rem] space-x-2 w-[8.5rem]">
          <p className="space-x-2">
            <span className="hidden lg:inline">Text</span>
            <span>&times;</span>
          </p>
          <input
            className="border-2 py-2 px-3 rounded-lg w-[6.8rem] focus:outline-stone-400 "
            type="number"
            placeholder="1"
            value={times}
            min={1}
            max={50000}
            onKeyDown={handleTimes}
            onChange={(e) => {
              // console.log(e.target.value);
              if (e.target.value > 50000) setTimes(50000);
              else setTimes(e.target.value);
            }}
          />
        </span>

        <p className="hidden lg:inline-block  min-w-28 ">Seperate by : </p>
        <select
          className="border-2 py-2 px-3 rounded-lg w-[8.5rem] focus:outline-stone-400"
          type="text"
          value={seperator}
          onChange={(e) => {
            setSeperator(e.target.value);
          }}>
          <option value="1">New line</option>
          <option value="2">Space</option>
          <option value="3">Costimize</option>
        </select>
        {seperator == "3" && (
          <input
            ref={inputRef}
            className="border-2 py-2 px-3 rounded-lg w-[8.5rem] focus:outline-stone-400 "
            type="text"
            maxLength={10}
            placeholder="Seperator"
            value={costum}
            onChange={(e) => setCostum(e.target.value)}
          />
        )}

        <Button more={`${seperator == "3" ? "w-[8.5rem]" : "col-span-2"}`} onClick={getRepeat}>
          Repeat
        </Button>
      </div>
    </Container>
  );
}

export default TextManipulation;
