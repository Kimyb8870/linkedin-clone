import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
        {/* Feed center */}
        {/* Widgets right  */}
      </div>
    </div>
  );
}

export default App;
