// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getRandomQouteId } from "@/utils/helpers";
import { QuoteProps } from "../../type";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Home() {
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/quotes/${getRandomQouteId()}`
      );
      const quote = await res.json();
      setQuote(quote);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getQuote();

    return () => {
      setQuote({});
    };
  }, []);

  return (
    <main className={`${poppins.className}`}>
      <div className="container">
        <Navbar />
        <section className="py-24 sm:py-32 flex items-center justify-center">
          <div className="w-full sm:w-4/5 text-black">
            <p className="font-medium text-sm sm:text-lg">
              <span>
                <RiDoubleQuotesL size={30} />
              </span>
              {quote.quote}
              <span>
                <RiDoubleQuotesR size={30} className="inline ml-2" />
              </span>
            </p>
            <span className="block text-end mt-8 me-10 italic">
              ~ {quote.author}
            </span>
            <div className="text-center">
              <button
                onClick={getQuote}
                className="bg-primary rounded-lg py-4 px-8 text-center mt-12 sm:hover:bg-black text-white transition-all duration-1000"
              >
                Get new quote
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
