Practibot Frontend

The frontend of Practibot is a React-based web application that allows users to interact with a chatbot designed for music-related queries. The application includes a dynamic chat interface, intuitive animations, and user-friendly features like scrolling to the latest messages and an introductory animation.

Features

Chatbot
• Interactive Chat Interface: Users can ask music-related questions and get detailed responses.
• Typing Simulation: Simulates typing for assistant responses with a smooth animation.
• Scroll to Top: Provides a button to scroll back to the user’s latest question in the chat history.
• Error Handling: Alerts users when the input field is empty.

UI/UX
• Intro Animation: Displays an introductory text with a fade-out and slide-up effect.
• Responsive Design: Optimized for desktop and mobile viewing.
• Smooth Scrolling: Automatically scrolls to the latest messages in the chat history.

State Management
• React Hooks: Manages states for chat history, user input, loading animations, and UI visibility.

Integration
• Backend API: Sends user queries to a backend endpoint (http://127.0.0.1:8000/api/v1/chatbot) and processes the responses.

Key Components

Chatbot.tsx
• Core component handling:
• User input and chat history.
• Animation for assistant typing.
• Integration with the backend chatbot API.

Header.tsx
• Navigation header with a burger menu and close button.
• Allows switching between sections like “About” and “Contact.”
