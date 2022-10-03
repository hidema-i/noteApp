import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="Fill in note contents"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note contents</div>
      </div>
    </div>
  );
};

export default Main;
