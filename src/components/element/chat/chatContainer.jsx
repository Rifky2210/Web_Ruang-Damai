import React from "react";

const ChatContainer = ({ children }) => {
  return (
    <div className="bg-[#D2F5FF]  m-20 p-20 rounded-lg flex flex-col gap-5">
      {children}
    </div>
  );
};

export default ChatContainer;