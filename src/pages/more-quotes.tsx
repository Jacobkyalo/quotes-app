// @ts-nocheck
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Head from "next/head";
import { BiArrowBack } from "react-icons/bi";
import QuoteText from "@/components/quote-text";
import Footer from "@/components/footer";
import { QuoteProps } from "../../type";

export default function MoreQuotes({
  quotes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>More Quotes - Quotes App</title>
        <base href="/more-quotes" />
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
        <header className="py-6">
          <nav>
            <Link
              href="/"
              className="font-bold text-black hover:text-primary transition-all duration-1000"
            >
              <BiArrowBack size={40} />
            </Link>
          </nav>
        </header>
        <main>
          <section className="my-12 sm:my-16 flex flex-col items-center justify-center">
            {quotes?.quotes.map((quote: QuoteProps, index: number) => (
              <QuoteText key={index} quote={quote} />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  quotes: QuoteProps[];
}> = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  const quotes = await res.json();

  return {
    props: { quotes },
  };
};
