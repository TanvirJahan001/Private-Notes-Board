// App.jsx
import React, { useState } from "react";
import MessageBoard from "./components/MessageBoard";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const [theme, setTheme] = useState("bg-white text-black");

  return (
    <div
      className={`${theme} min-h-screen flex items-center justify-center p-4`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.1))",
      }}
    >
      <div className="backdrop-blur-md bg-white/30 border border-white/10 shadow-lg rounded-lg container mx-auto max-w-4xl p-6">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-fuchsia-800 to-violet-900 bg-clip-text text-transparent">
          Private Notes Board
        </h1>
        <ThemeSelector setTheme={setTheme} />
        <MessageBoard theme={theme} />
      </div>
    </div>
  );
}

export default App;
