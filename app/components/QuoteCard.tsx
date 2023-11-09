"use client";

import { Button } from "@/components/ui/button";
import { Copy, CopyIcon, QuoteIcon, Volume, Volume2, VolumeIcon } from "lucide-react";
import { useState } from "react";

const QuoteCard = () => {
  const [quote, setQuote] = useState<string>(
    "Even what looks bad today, could be the best for tomorrow. We just have to be patient until His provisions arrive."
  );
  const [author, setAuthor] = useState<string>("Ammar Musyaffa");

  const randomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-2xl
        mx-auto
        bg-white
        rounded-xl
        shadow-xl
        p-8
        sm:p-10
        md:p-12
        lg:p-16
        xl:p-20
    "
    >
      <header
        className="
            text-center
            text-3xl
            font-bold
            mb-8
            sm:mb-10
            md:mb-12
            lg:mb-16
            xl:mb-20
      "
      >
        Quotes of the Day
      </header>
      <div
        className="
            relative
            flex
            flex-col
            justify-between
            items-center
            h-64
            sm:h-72
            md:h-80
            lg:h-96
            xl:h-112
            mb-8
            sm:mb-10
            md:mb-12
            lg:mb-16
            xl:mb-20
      "
      >
        <div
          className="
                flex
                flex-col
                justify-center
                items-center
                text-center
                text-gray-800
                text-lg
                mb-4
                sm:mb-6
                md:mb-8
                lg:mb-10
                xl:mb-12
        "
        >
          <QuoteIcon className="text-4xl text-gray-700 mb-4" />
          <p className="quote text-center text-2xl">{quote}</p>
          <QuoteIcon className="text-4xl text-gray-700 mt-4 transform rotate-180" />
        </div>
        <div
          className="
                flex
                flex-col
                justify-center
                items-center
                text-center
                text-gray-600
                text-lg
        "
        >
          <span
            className="
                    text-gray-800
                    font-bold
                    sm:my-4
                    md:my-6
                    lg:my-8
                    xl:my-10
          "
          >
            {author}
          </span>
        </div>
        <div
          className="
                absolute
                bottom-0
                right-0
                w-full
                flex
                justify-between
                items-center
                px-4
                sm:px-6
                md:px-8
                lg:px-10
                xl:px-12
        "
        >
          <div className="flex justify-between items-center w-full">
            <ul className="flex items-center">
              <li className="
              border 
              rounded-full 
              p-2 
              cursor-pointer
              hover:bg-gray-100
                transition
                duration-300
                ease-in-out
                mr-2
                ">
                <Volume2 className="text-gray-800" />
              </li>
              <li className="
              border 
              rounded-full 
              p-2 
              cursor-pointer
              hover:bg-gray-100
                transition
                duration-300
                ease-in-out
              ">
                <CopyIcon className="text-gray-800" />
              </li>
            </ul>
            <Button onClick={randomQuote}>New Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
