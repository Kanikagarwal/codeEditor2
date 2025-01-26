import React, { useState } from "react";
// import CodeMirror from "codemirror";

import { useEffect, useRef } from "react";

function Editor() {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const [language,setLanguage] = useState("");
  useEffect(() => {
    let editor = window.CodeMirror.fromTextArea(editorRef.current, {
      mode: language,
      lineNumbers: true,
      theme: "dracula",
      autoCloseBrackets: true,
    });

    let height = window.innerHeight;
    editor.setSize(0.7 * window.innerWidth, 0.8 * height);
  }, [language]);

  function handleOption(e) {
    let value = e.target.value;
    switch (value) {
        case "1":
            setLanguage("text/x-c++src");
            break;
            case "2":
            setLanguage("text/x-python");
            break;
            case "3":
            setLanguage("text/x-java");
            break;
    }
  }

  return (
    <>
       <div className="container-fluid mt-4">
      {/* Toolbar */}
      <div className="d-flex justify-content-between mb-3 run-box">
        <select className="form-select w-25" aria-label="Language selection" onChange={handleOption}>
          <option selected>Choose Language</option>
          <option value="1">C++</option>
          <option value="2">Python</option>
          <option value="3">Java</option>
        </select>
        <button className="btn btn-primary">
          Run Code <i className="fa-solid fa-play"></i>
        </button>
      </div>

      {/* Main Content */}
      <div className="d-flex">
        {/* CodeMirror Editor */}
        <div className="flex-fill me-3">
          <textarea ref={editorRef} className="form-control h-100"></textarea>
        </div>

        {/* Input-Output Section */}
        <div className="d-flex flex-column w-25 bg-dark rounded px-2">
          <div className="mb-4">
            <label className="text-light">Input</label>
            <textarea className="form-control result mb-2 mt-2" aria-label="Input" ref={inputRef}></textarea>
          </div>
          <div>
            <label className="text-light">Output</label>
            <textarea className="form-control result" aria-label="Output" ref={outputRef} readOnly></textarea>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Editor;
