"use client"

// components/QuoteCard.tsx
import { useState } from 'react';

const QuoteCard = () => {
  const [quote, setQuote] = useState<string>(
    "Even what looks bad today, could be the best for tomorrow. We just have to be patient until His provisions arrive."
  );
  const [author, setAuthor] = useState<string>("Ammar Musyaffa");

  const randomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return (
    <div className="wrapper bg-white rounded p-8">
      <header className="text-2xl font-semibold mb-4">Quotes of the Day</header>
      <div className="content">
        <div className="quote-area flex justify-center items-center mb-8">
          <i className="fas fa-quote-left text-xl mr-2"></i>
          <p className="quote text-center text-2xl">{quote}</p>
          <i className="fas fa-quote-right text-xl ml-2"></i>
        </div>
        <div className="author flex justify-end italic text-lg mb-4">
          <span>__</span>
          <span className="name">{author}</span>
        </div>
        <div className="buttons border-t border-gray-300 pt-4 flex justify-between items-center">
          <div className="features">
            <ul className="flex">
              <li className="sound border rounded-full p-2 mr-2 cursor-pointer">
                <i className="fas fa-volume-up"></i>
              </li>
              <li className="copy border rounded-full p-2 cursor-pointer">
                <i className="fas fa-copy"></i>
              </li>
            </ul>
            <button
              onClick={randomQuote}
              className="bg-black text-white rounded px-4 py-2 text-lg transition duration-300 hover:bg-gray-800"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
