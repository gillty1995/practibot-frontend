import React from "react";
import githubSvg from "../assets/github-mark.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white p-4 mt-8 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-sm">
        <p>&copy; 2024 Gill Hermelin. All rights reserved.</p>
        <span>|</span>
        <p>
          Powered by{" "}
          <a
            href="https://openai.com/chatgpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GenAI
          </a>
        </p>
      </div>
      <a
        href="https://github.com/gillty1995"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <img src={githubSvg} alt="GitHub" className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
