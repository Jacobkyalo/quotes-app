// @ts-nocheck
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import QuoteText from "@/components/quote-text";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { QuoteProps } from "../../type";

export default function MoreQuotes({
  quotes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
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
      <section className="py-16 sm:py-24 flex flex-col items-center justify-center">
        {quotes?.quotes.map((quote: QuoteProps, index: number) => (
          <QuoteText key={index} quote={quote} />
        ))}
      </section>
    </div>
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
