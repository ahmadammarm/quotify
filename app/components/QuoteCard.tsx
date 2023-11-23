"use client"

import { Button } from "@/components/ui/button";
import { CopyIcon, Volume2 } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";


const QuoteCard = () => {
  const [quote, setQuote] = useState<string>(
    "Don't compare yourself with other people, everyone has their own way and everything that is measured will never be changed."
  );
  const [author, setAuthor] = useState<string>("Ammar");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const randomQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setTimeout(() => {
        setQuote(data.content);
        setAuthor(data.author);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching random quote:", error);
      setIsLoading(false);
    }
  };

  const playSound = () => {
    const speech = new SpeechSynthesisUtterance(quote);
    const authorSpeech = new SpeechSynthesisUtterance(author);
    window.speechSynthesis.speak(speech);
    window.speechSynthesis.speak(authorSpeech);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(quote);
    toast.success("Copied to your clipboard!");
  };

  return (
    <>
    <Toaster />
    <div className="
      w-full 
      max-w-2xl 
      mx-auto 
      p-8
      mt-10
      ">
      <header className="text-center text-3xl font-bold mb-8">
        Quote of the Day
      </header>
      <div className="relative flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center text-center text-lg">
          <p className="quote text-center text-2xl italic">{quote}</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center text-lg mt-5">
          <span className="
          text-center
          font-bold
          ">- {author} -</span>
        </div>
        <div className="relative bottom-0 right-0 w-full flex justify-between items-center px-4 mt-10">
          <div className="flex justify-between items-center w-full mb-10">
            <ul className="
            flex 
            items-center
            ">
              <li
                className="
                border 
                rounded-full 
                p-2 
                cursor-pointer 
                transition 
                duration-300 
                ease-in-out 
                mr-2 
                hover:text-teal-500
                "
                onClick={playSound}
              >
                <Volume2 className="hover:text-teal-500 transition duration-300 ease-in-out" />
              </li>
              <li
                className="border rounded-full p-2 cursor-pointer transition duration-300 ease-in-out hover:text-teal-500"
                onClick={copyQuote}
              >
                <CopyIcon className="hover:text-teal-500 transition duration-300 ease-in-out" />
              </li>
            </ul>
            <Button onClick={randomQuote} disabled={isLoading}>
              {isLoading ? "Loading..." : "New Quote"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default QuoteCard;
