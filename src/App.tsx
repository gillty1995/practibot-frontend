import React, { useState } from "react";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [displaySection, setDisplaySection] = useState<
    "chatbot" | "about" | "contact"
  >("chatbot");

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/music-background.jpg')" }}
    >
      <Header setDisplaySection={setDisplaySection} />
      <main className="flex-grow flex items-center justify-center">
        {displaySection === "chatbot" && (
          <div className="w-full mt-7 max-w-2xl p-6 sm:p-10 bg-white bg-opacity-80 rounded-3xl shadow-2xl m-3 customSmall:p-0">
            <Chatbot />
          </div>
        )}
        {displaySection === "about" && <About />}
        {displaySection === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
