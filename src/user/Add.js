import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Add() {
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState(null);

  const addFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("pdf", file);

    let url = "http://localhost:4000/pdfs/upload";
    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        console.log("File uploaded successfully");
        alert("File uploaded successfully");
      } else {
        console.log("File not uploaded");
      }
    } catch (error) {
      console.log(error);
      alert("Error in add page");
    }
  };

  return (
    <div>
      <form onSubmit={addFile}>
        <input
          type="text"
          placeholder="File name"
          required
          onChange={(e) => setFilename(e.target.value)}
        />
        <br />
        <br />
        <input
          type="file"
          placeholder="File"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit">ADD</button>
        <br />
        <br />
      </form>
      <div>
        <Link to="/Year">
          <button>check</button>
        </Link>
        <br />
        <br />
        <Link to="/AddLinksForm">
          <button>ADD LINKS</button>
        </Link>
      </div>
    </div>
  );
}

export default Add;
