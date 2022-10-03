import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  //複数の追加Noteを格納する配列
  const [notes, setNotes] = useState([]);
  //Click時にハイライトされるロジック
  const [activeNote, setActiveNote] = useState(false);
  //insertButton
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "NewNote!",
      content: "NewNoteSample",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };
  //deleteButton
  const onDeleteNote = (id) => {
    const filteredNote = notes.filter((note) => note.id !== id);
    setNotes(filteredNote);
  };
  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
