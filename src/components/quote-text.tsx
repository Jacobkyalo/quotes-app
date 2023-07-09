import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { QuoteProps } from "../../type";
export default function QuoteText({ quote }: QuoteProps) {
  return (
    <>
      <div className="w-full sm:w-4/5 rounded-lg bg-primary mb-6">
        <div className="py-6 px-4 text-white flex gap-x-4">
          <h2 className="font-bold text-xl">{quote.id}.</h2>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
}
