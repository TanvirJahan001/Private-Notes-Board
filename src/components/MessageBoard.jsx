// components/MessageBoard.jsx
import React, { useEffect, useState } from "react";
import MessageForm from "./MessageForm";
import SearchBar from "./SearchBar";

const MessageBoard = ({ theme }) => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (newMessage) => setMessages([...messages, newMessage]);
  const deleteMessage = (index) =>
    setMessages(messages.filter((_, i) => i !== index));
  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <SearchBar setSearchTerm={setSearchTerm} />
      <MessageForm addMessage={addMessage} />
      <div className="mt-4 space-y-4">
        {filteredMessages.map((msg, idx) => (
          <div
            key={idx}
            className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow flex justify-between items-center text-white"
          >
            <p className="break-words max-w-full">{msg.text}</p>
            <div className="flex items-center space-x-2">
              <span className="text-xs">{msg.timestamp}</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => deleteMessage(idx)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
