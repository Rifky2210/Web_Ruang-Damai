import React, { useState } from "react";
import { FaPaperPlane } from 'react-icons/fa';

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage(message, "patient");
      setMessage("");
    }
  };

  return (
    <div className="w-full h-full flex flex-row gap-1">
      <input
        type="text"
        placeholder="Ketik pesan..."
        className="w-full h-10 p-5 rounded-xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <button onClick={handleSendMessage}>Kirim</button> */}
      <button className="bg-[#0081C6] text-white h-15 w-40 rounded-xl flex items-center justify-center" onClick={handleSendMessage}>
                  <FaPaperPlane className="mr-2" /> Kirim
      </button>
    </div>
  );
};

export default ChatInput;