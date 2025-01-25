**Practibot Frontend**

Practibot is a React-based web application that allows users to interact with a music-themed chatbot. It features a dynamic chat interface, engaging animations, and a responsive design optimized for both desktop and mobile users.

**Links**

1. Deployed site: https://practibot.hec.to/
2. Backend repo: https://github.com/gillty1995/practibot-backend

**Intro**

Practibot offers a seamless user experience for music enthusiasts to interact with an AI-powered chatbot. Users can ask music-related questions, receive detailed responses, and enjoy a modern, intuitive interface. The application connects to a backend API to process user queries and provide intelligent responses, making it a powerful tool for exploring music knowledge.

**Technologies**
	
 1.	React: Used for building the user interface with a component-based structure.
	2.	React Router DOM: Manages routing between different pages and components.
	3.	TypeScript: Adds type safety and enhances code quality across the project.
	4.	TailwindCSS: Provides utility-first CSS for fast styling and responsive design.
	6.	Fetch: Used for making HTTP requests to interact with the backend chatbot API.

**Techniques**

_State Management_

1. Utilizes React’s useState and useEffect hooks to manage:
2. Chat history and user input.
3. Loading states for typing animations.
4. Visibility of UI elements like scroll buttons and intro animations.

_User Interaction_

Chatbot Features:
1. Simulated Typing: The assistant typing animation creates a realistic interaction experience.
2. Error Handling: Alerts users when the input field is empty.
3. Scroll to Latest: Automatically scrolls to the latest chat message for seamless navigation.

UI/UX Enhancements:
1. Intro Animation: A fade-out and slide-up animation introduces users to the chatbot.
2. Responsive Design: Optimized for mobile and desktop viewing with consistent performance.
3. Smooth Scrolling: Enhances navigation within the chat interface.

_Backend Integration_

1. Connects to the backend API endpoint: http://127.0.0.1:8000/api/v1/chatbot.
2. Sends user queries and processes chatbot responses in real-time.

**Key Components**

_Chatbot.tsx_

1. Manages user input, chat history, and backend integration.
2. Handles animations for chatbot responses and typing effects.

_Header.tsx_

1. Provides a navigation bar with a burger menu and close button.
2. Enables users to switch between sections like “About” and “Contact.”

**Final Thoughts**

Practibot showcases a blend of modern web development practices and interactive design. With its integration of React, TypeScript, and backend APIs, it delivers a powerful chatbot experience for music enthusiasts. From smooth animations to real-time interactions, Practibot highlights the capabilities of full-stack development in creating user-friendly applications.
