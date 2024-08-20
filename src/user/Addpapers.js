import React, { useState } from "react";
import axios from "axios";

function Addpapers() {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [exam, setexam] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("exam", exam);

    let url = "http://localhost:4000/img/addimg";
    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.status === 201) {
        alert("Image Added");
      } else {
        alert("Failed to add image");
      }
    } catch (error) {
      console.log(error);
      alert("error in img adding page");
    }
  };

  return (
    <div>
      <div>
        <h4>ADD PAPERS</h4>
      </div>
      <div>
        <form onSubmit={submit}>
          <input
            type="file"
            placeholder="image"
            onChange={(e) => setImg(e.target.files[0])}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="TITLE"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="enter exam type"
            onChange={(e) => setexam(e.target.value)}
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Addpapers;
