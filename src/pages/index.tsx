// @ts-nochec
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import { getRandomQouteId } from "@/utils/helpers";
import { QuoteProps } from "../../type";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Home() {
  const [quote, setQuote] = useState<QuoteProps>({
    id: 0,
    quote: "",
    author: "",
  });
  const [loading, setLoading] = useState<Boolean>(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/quotes/${getRandomQouteId()}`
      );
      const quote = await res.json();
      setQuote(quote);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getQuote();

    return () => {
      setQuote({ id: 0, quote: "", author: "" });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home - Quotes App</title>
        <base href="/" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Get motivational quotes to keep you moving and encouraged through quotes app."
        />
        <meta
          name="keywords"
          content="Quotes App, Motivational quotes, Quotes ,Sayings, Motivation"
        />
        <meta name="author" content="Quotes App" />
      </Head>
      <div className="container">
        <div className={`${poppins.className}`}>
          <Navbar />
          <main>
            <section className="py-24 sm:py-32 flex items-center justify-center">
              <div className="w-full sm:w-4/5 text-black">
                <p className="font-medium text-sm sm:text-lg">
                  {loading ? (
                    <Loading>
                      <span>Loading quote...</span>
                    </Loading>
                  ) : (
                    <>
                      <span>
                        <RiDoubleQuotesL size={30} />
                      </span>
                      {quote.quote}
                      <span>
                        <RiDoubleQuotesR size={30} className="inline ml-2" />
                      </span>
                    </>
                  )}
                </p>
                <span className="block text-end mt-8 me-10 italic">
                  {loading ? (
                    <Loading>
                      <span>Loading author...</span>
                    </Loading>
                  ) : (
                    <> ~ {quote.author}</>
                  )}
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
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
