import React from "react";
import "./Sidebar1.css";

const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button onClick={onAddNote}>insert</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note" key={note.id}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>delete</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
