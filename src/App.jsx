import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  //複数の追加Noteを格納する配列
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "NewNote!",
      content: "NewNoteSample",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
