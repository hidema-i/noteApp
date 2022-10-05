import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  //複数の追加Noteを格納する配列
  //LocalStorageにJSONで渡したので、parseで戻す。なければ空配列で返す

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  //Click時にハイライトされるロジック
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //LocalStorageにノートを格納
    localStorage.setItem("notes", JSON.stringify(notes)); //notesはJson形式ではないといけない
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  //insertButton
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "NewNote!",
      content: "",
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

  //Main
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updateNotesArray);
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
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
