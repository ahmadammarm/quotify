"use client"

import { Button } from "@/components/ui/button";
import { Copy, CopyIcon, QuoteIcon, Volume, Volume2, VolumeIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

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

  const playSound = () => {
    const speech = new SpeechSynthesisUtterance(quote);
    window.speechSynthesis.speak(speech);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(quote);
    toast.success("Quote copied to clipboard");
  };


  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <header className="text-center text-3xl font-bold mb-8">
        Quotes of the Day
      </header>
      <div className="relative flex flex-col justify-between items-center h-64">
        <div className="flex flex-col justify-center items-center text-center text-lg mb-4">
          <QuoteIcon className="text-2xl mb-4" />
            <p className="quote text-center text-2xl">{quote}</p>
          <QuoteIcon className="text-2xl mt-4 transform rotate-180" />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-lg">
          <span className="font-bold">{author}</span>
        </div>
        <div className="absolute bottom-0 right-0 w-full flex justify-between items-center px-4">
          <div className="flex justify-between items-center w-full">
            <ul className="flex items-center">
              <li
                className="border rounded-full p-2 cursor-pointer transition duration-300 ease-in-out mr-2"
                onClick={playSound}
              >
                <Volume2 />
              </li>
              <li
                className="border rounded-full p-2 cursor-pointer transition duration-300 ease-in-out"
                onClick={copyQuote}
              >
                <CopyIcon />
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
