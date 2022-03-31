import React from 'react';
import './App.css';
import { Chat, Sidebar } from './components';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* SIDE BAR */}
        <Sidebar />

        {/* CHAT COMPONENT */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
