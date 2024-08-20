import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Papers2() {
  const [exam, setExam] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const { category } = useParams();
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const data = { title: category };
    const url = "http://localhost:4000/img/getimg";
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        alert("Paper found successfully");
        setExam(res.data.exam);
        setFileUrl(`http://localhost:4000/${res.data.img}`);
        setError("");
      } else {
        setFileUrl(null);
        setError("Paper still not uploaded");
      }
    } catch (err) {
      console.log(err);
      setFileUrl(null);
      setError("An error occurred while fetching the image");
    }
  };

  return (
    <div>
      <div>
        <h3>Hey, this is the {`${category}`} papers page</h3>
      </div>
      <div>
        <form onSubmit={submit}>
          <button type="submit">{`${category}`}</button>
        </form>
      </div>
      <div>
        {fileUrl && (
          <div>
            <h4>Exam: {exam}</h4>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              View paper
            </a>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Papers2;
