import React from "react";
import "./Main.css";

const Main = ({ activeNote }) => {
  //activeNoteはfalseなので、条件分岐
  if (!activeNote) {
    return <div className="no-active-note">No note selected</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="Fill in note contents"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
