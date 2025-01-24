**Practibot Frontend**

Practibot is a React-based web application that allows users to interact with a music-themed chatbot. It features a dynamic chat interface, engaging animations, and a responsive design optimized for both desktop and mobile users.

**Links**
• Deployed site: https://practibot.hec.to/
• Backend repo: https://github.com/gillty1995/practibot-backend

**Intro**

Practibot offers a seamless user experience for music enthusiasts to interact with an AI-powered chatbot. Users can ask music-related questions, receive detailed responses, and enjoy a modern, intuitive interface. The application connects to a backend API to process user queries and provide intelligent responses, making it a powerful tool for exploring music knowledge.

**Technologies**
• React: Builds the user interface with a component-based structure.
• React Hooks: Manages state for chat history, animations, and UI elements.
• TypeScript: Adds type safety and enhances code quality.
• CSS Modules: Implements modular, maintainable styles.
• Axios: Handles HTTP requests to the backend chatbot API.
• GSAP (GreenSock Animation Platform): Creates smooth animations for intro text and typing effects.
• HTML5 & CSS3: Provides responsive layouts and styling.

**Techniques**

_State Management_
• Utilizes React’s useState and useEffect hooks to manage:
• Chat history and user input.
• Loading states for typing animations.
• Visibility of UI elements like scroll buttons and intro animations.

_User Interaction_
• Chatbot Features:
• Simulated Typing: The assistant typing animation creates a realistic interaction experience.
• Error Handling: Alerts users when the input field is empty.
• Scroll to Latest: Automatically scrolls to the latest chat message for seamless navigation.
• UI/UX Enhancements:
• Intro Animation: A fade-out and slide-up animation introduces users to the chatbot.
• Responsive Design: Optimized for mobile and desktop viewing with consistent performance.
• Smooth Scrolling: Enhances navigation within the chat interface.

_Backend Integration_
• Connects to the backend API endpoint: http://127.0.0.1:8000/api/v1/chatbot.
• Sends user queries and processes chatbot responses in real-time.

**Key Components**

_Chatbot.tsx_
• Manages user input, chat history, and backend integration.
• Handles animations for chatbot responses and typing effects.

_Header.tsx_
• Provides a navigation bar with a burger menu and close button.
• Enables users to switch between sections like “About” and “Contact.”

_Error Boundary_
• Catches application errors and displays a fallback UI to maintain user experience.

**Final Thoughts**

Practibot showcases a blend of modern web development practices and interactive design. With its integration of React, TypeScript, and backend APIs, it delivers a powerful chatbot experience for music enthusiasts. From smooth animations to real-time interactions, Practibot highlights the capabilities of full-stack development in creating user-friendly applications.
