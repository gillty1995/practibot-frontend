import React, { useEffect, useState } from "react";

interface IntroTextProps {
  className?: string;
}

const IntroText: React.FC<IntroTextProps> = ({ className }) => {
  const words = ["exercises", "lessons", "scales", "tips", "challenges"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      className={`bg-transparent font-raleway text-black text-center p-4 rounded-md mb-4 shadow-lg max-w-xl ${className}`}
    >
      <h2 className="text-2xl font-bold">A New Way to Practice!</h2>
      <p className="mt-2 custom:w-custom custom:m-auto customSmall:w-customSmall customSmall:text-xs">
        Ask Practibot how you can improve your music skills, and it will provide
        custom{" "}
        <span className="absolute inline-block">
          <span
            key={currentWordIndex}
            className="absolute pl-1 inset-0 animate-replaceText text-blue-500 font-bold"
          >
            {words[currentWordIndex]}
          </span>
        </span>
      </p>
    </div>
  );
};

export default IntroText;
