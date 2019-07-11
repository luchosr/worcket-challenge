import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="App">
      <h1>Supermarket list</h1>
      <h3>0 item(s)</h3>
      <ul />

      <button className="App__itemAdder" onClick={() => setisOpen(true)}>
        Add Item
      </button>
      <Dialog isOpen={isOpen} onClose={() => setisOpen(false)}>
        <h1> Add Item</h1>

        <input className="modal_input" type="text" />
        <div>
          <button>Close</button>
          <button>Add</button>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
