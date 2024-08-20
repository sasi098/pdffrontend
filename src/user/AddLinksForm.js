// AddLinksForm.js
import React, { useState } from "react";
import axios from "axios";

const AddLinksForm = () => {
  const [filename, setFilename] = useState("");
  const [links, setLinks] = useState([{ url: "", text: "" }]);

  const handleFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...links];
    newLinks[index][e.target.name] = e.target.value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, { url: "", text: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/pdfs/addlinks", { filename, links })
      .then((response) => {
        alert("Links added successfully");
        setFilename("");
        setLinks([{ url: "", text: "" }]);
      })
      .catch((error) => {
        console.error("There was an error adding the links!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Filename:</label>
        <input
          type="text"
          value={filename}
          onChange={handleFilenameChange}
          required
        />
      </div>
      {links.map((link, index) => (
        <div key={index}>
          <label>Link URL:</label>
          <input
            type="text"
            name="url"
            value={link.url}
            onChange={(e) => handleLinkChange(index, e)}
            required
          />
          <label>Link Text:</label>
          <input
            type="text"
            name="text"
            value={link.text}
            onChange={(e) => handleLinkChange(index, e)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={addLinkField}>
        Add Another Link
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddLinksForm;
