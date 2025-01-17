import React from "react";

const About: React.FC = () => {
  return (
    <div id="about" className="bg-transparent p-6 max-w-3xl mx-auto mt-8">
      <div className="bg-gray-800 bg-opacity-80 text-white p-6 rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-400 text-center">
          About Practibot
        </h1>
        <p className="mb-4">
          Practibot is an innovative music chatbot designed to assist musicians,
          producers, and enthusiasts with their musical queries. Whether you’re
          exploring new chord progressions, seeking tips on practicing, or
          learning about different genres and techniques, Practibot is here to
          help.
        </p>
        <p className="mb-4">With its intuitive interface, Practibot offers:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Answers to music-related questions.</li>
          <li>Suggestions for practice techniques and routines.</li>
          <li>Insights into music theory and production.</li>
          <li>Personalized advice tailored to your needs.</li>
        </ul>
        <p className="mb-4">
          Practibot was created by{" "}
          <span className="text-blue-400 font-semibold">Gill Hermelin</span>, a
          full-stack software engineer, sound engineer, and passionate musician.
          With expertise in both technology and music, Gill designed Practibot
          to bridge the gap between creativity and practicality, empowering
          musicians at every level.
        </p>
      </div>
    </div>
  );
};

export default About;
