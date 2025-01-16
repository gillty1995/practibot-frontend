import React, { useState, useEffect, useRef } from "react";
import IntroText from "../components/IntroText";
import upArrow from "../../public/up-arrow.svg";

const Chatbot: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { user: string; assistant: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const chatHistoryRef = useRef<HTMLDivElement | null>(null);
  const [showIntroText, setShowIntroText] = useState(true);
  const [introTextAnimation, setIntroTextAnimation] = useState("");
  const [introTextOpacity, setIntroTextOpacity] = useState(1);

  // Scroll to the bottom of chat
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTo({
        top: chatHistoryRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  const typeResponse = async (text: string, index: number) => {
    const typingSpeed = 20;
    setIsTyping(true);
    let typedText = "";

    setShowUpArrow(false);

    for (let i = 0; i < text.length; i++) {
      typedText += text[i];

      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[index].assistant = typedText;
        return updatedHistory;
      });

      await new Promise((resolve) => setTimeout(resolve, typingSpeed));
    }

    setIsTyping(false);
    setShowUpArrow(true); // Show the up arrow once typing is complete
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      alert("Question cannot be empty");
      return;
    }

    setChatHistory((prev) => [...prev, { user: question, assistant: "" }]);
    setQuestion("");
    setLoading(true);

    setIntroTextAnimation("slide-up");
    setIntroTextOpacity(0);
    setTimeout(() => setShowIntroText(false), 500);

    try {
      const queryParams = new URLSearchParams({ question, reset: "false" });

      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/chatbot?${queryParams.toString()}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();
      const responseText = data.response;

      const lastIndex = chatHistory.length;
      await typeResponse(responseText, lastIndex);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to the last user's question when the up arrow is clicked
  const handleScrollToTop = () => {
    if (chatHistoryRef.current) {
      const lastMessage = chatHistoryRef.current.lastElementChild;
      lastMessage?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const formatText = (text: string) => {
    return text.replace(/```/g, "").replace(/\t/g, "    ");
  };

  return (
    <div className="bg-transparent p-6 max-w-3xl mx-auto mt-8">
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          opacity: introTextOpacity,
          visibility: showIntroText ? "visible" : "hidden",
        }}
      >
        {showIntroText && (
          <IntroText
            className={`transition-all duration-500 ${
              introTextAnimation === "slide-up"
                ? "transform translate-y-[-20px] opacity-0"
                : ""
            }`}
          />
        )}
      </div>

      <div
        ref={chatHistoryRef}
        className="chat-history space-y-4 mb-6 overflow-y-auto"
        style={{ maxHeight: "400px" }}
      >
        {chatHistory.map((msg, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs break-words shadow-lg user-message">
                {msg.user}
              </div>
            </div>
            <div className="flex justify-start relative">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs break-words shadow-lg">
                {msg.assistant ||
                (isTyping && index === chatHistory.length - 1) ? (
                  <div className="whitespace-pre-wrap break-words overflow-auto">
                    {formatText(msg.assistant)}
                    {showUpArrow && index === chatHistory.length - 1 && (
                      <button
                        onClick={handleScrollToTop}
                        className="p-2 bg-transparent rounded-full hover:bg-gray-300 transition-opacity duration-300 animate-fadeIn"
                      >
                        <img src={upArrow} alt="Up Arrow" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-pingDot1"></div>
                    <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-pingDot2"></div>
                    <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-pingDot3"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a music-related question"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          disabled={loading || isTyping}
        >
          {loading || isTyping ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
