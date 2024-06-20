import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChatContainer from "../components/element/chat/chatContainer";
import ChatBubble from "../components/element/chat/chatBubble";
import ChatInput from "../components/element/chat/chatInput";
import Footer from "../components/FooterComponent";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Apa yang ingin anda tanyakan?", sender: "doctor" },
    { text: "Lelah batin, Depresi, Cemas?", sender: "doctor" },
    { text: "Kenapa lelah batin itu selalu menghantui selalu", sender: "patient" },
    
  ]);

  const sendMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <Navbar />
      <ChatContainer>
        <div className="w-full flex justify-center mb-20">
            <p className="w-2/3 text-center">Bot ini di sini untuk mendengarkan dan membantu. Jangan ragu untuk berbagi keluh kesah atau apa pun yang Anda rasakan. Mari kita bahas semuanya bersama</p>
        </div>
        <div className="overflow-y-auto h-[500px] flex flex-col gap-5">
        {messages.map((message, index) => (
            <ChatBubble key={index} text={message.text} sender={message.sender} />
        ))}
        </div>
        <ChatInput sendMessage={sendMessage} style="w-full" />
      </ChatContainer>
      <Footer />
    </>
  );
};

export default Chat;