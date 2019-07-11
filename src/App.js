import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setisOpen(true)}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={() => setisOpen(false)}>
        <h1> Add Item</h1>

        <div>
          <button>Close</button>
          <button>Add</button>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
