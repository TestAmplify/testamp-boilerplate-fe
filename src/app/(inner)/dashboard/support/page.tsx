"use client";
import { useState } from "react";
// import { io } from "socket.io-client";

import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";

export interface Messages {
  isUser: boolean;
  text?: string; // Text message
  audio?: string; // Audio message
  timestamp?: string;
  linkText?: string | undefined;
}

// ------ To be uncommented later ----|
// const socket = io("http://localhost:3000");

const Support = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  //   // Send a message
  // ------ To be uncommented later ----|
  //   useEffect(() => {
  //     const currentSocket = socket; // Ensure the useEffect cleanup references the correct instance

  //     currentSocket.on("receiveMessage", (message: Messages) => {
  //       const timestamp = message.timestamp || new Date().toISOString();
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           text: message.text,
  //           textLink: message.linkText,
  //            audioUrl: message.audioUrl
  //           isUser: false,
  //           timestamp: message.timestamp || timestamp,
  //         },
  //       ]);
  //     });

  //     // Cleanup function
  //     return () => {
  //       currentSocket.disconnect();
  //     };
  //   }, []);

  // Send a message
  const handleSendMessage = (
    text?: string,
    audio?: string,
    textLink?: string
  ) => {
    const newMessage: Messages = {
      text,
      audio,
      linkText: textLink,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    // ------ To be uncommented later ----|
    // socket.emit("sendMessage", text);
  };

  return (
    <div>
      <ChatHeader />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Support;
