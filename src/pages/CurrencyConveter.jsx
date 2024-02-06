import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import BackHome from "../ui/BackHome";

const currencies = {
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Renminbi Yuan",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  EUR: "Euro",
  GBP: "British Pound",
  HKD: "Hong Kong Dollar",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  ISK: "Icelandic Króna",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Złoty",
  RON: "Romanian Leu",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  USD: "United States Dollar",
  ZAR: "South African Rand",
};
const apiUrl = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";
const apiKey = "TGkHkxTF1ZJ87lpWIzg8JJh8Z1VB6xV5IXUHQzJHikt7ZRJU";

function CurrencyConveter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("MAD");
  const [to, setTo] = useState("USD");
  const [converted, setConverted] = useState("Converted");

  const host = "api.frankfurter.app";

  useEffect(
    function () {
      async function Convert() {
        const res = await fetch(`https://${host}/latest?amount=${amount}&from${from}&to=${to}`);
        const data = await res.json();
        setConverted(data.rates[to]);
      }
      Convert();
    },
    [amount, from, to]
  );

  return (
    <Container className="gap-10">
      <BackHome />
      <form className="flex flex-col lg:flex-row items-center gap-5 sm:pt-28 md:pt-10 pb-10 sm:pb-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-5">
          <input
            className="border-2 py-2 px-3 rounded-md w-40"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="0"
          />
          <p>From</p>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="py-2.5 px-5 rounded-md"
            name="currency">
            {Object.entries(currencies).map(([code]) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <p>To</p>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="py-2.5 px-5 rounded-md"
            name="currency">
            {Object.entries(currencies).map(([code]) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="flex flex-col items-center md:block -order-1 sm:order-last sm:pb-20 md:pb-10">
        <span className="border-2 py-2 px-5 rounded-md md:mr-3 text-center ">
          {`${amount}` || 0}
          <span className="ml-2">{from}</span>
        </span>

        <span>is </span>
        <span className="border-2 py-2 px-5 rounded-md md:ml-3">
          {converted}
          <span className="ml-2">{to}</span>
        </span>
      </div>
    </Container>
  );
}

export default CurrencyConveter;
