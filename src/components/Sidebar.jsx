import React from "react";
import "./Sidebar1.css";
const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button>insert</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>noteの内容</p>
          <small>最後の修正日xx/xx</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
