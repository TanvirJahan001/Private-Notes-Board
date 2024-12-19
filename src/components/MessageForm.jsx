// components/MessageForm.jsx
import EmojiPicker from "emoji-picker-react";
import React, { useRef, useState } from "react";

const MessageForm = ({ addMessage }) => {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const handleEmojiClick = (emoji) => setText(text + emoji.emoji);
  const handleSubmit = () => {
    if (text.trim()) {
      addMessage({ text, timestamp: new Date().toLocaleString() });
      setText("");
    }
  };

  // Close emoji picker on outside click
  const handleClickOutside = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <textarea
        className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write a Note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Emoji
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>
      {showPicker && (
        <div ref={pickerRef}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default MessageForm;
