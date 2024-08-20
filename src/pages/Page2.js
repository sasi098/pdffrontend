import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Page2.css"; // Import the CSS file

function Page2() {
  const { category } = useParams();
  const [filename, setFilename] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState("");

  const teacherNames = {
    dbt1: "Teacher1",
    dbt2: "Teacher2",
    dbt3: "Teacher3",
    dbt4: "Teacher4",
    dbt5: "Teacher5",
    dbt6: "Teacher6",
    cnt1: "Dr. Kim",
    cnt2: "Prof. Liu",
    cnt3: "Dr. Wang",
    cnt4: "Prof. Zhang",
    cnt5: "Dr. Chen",
    cnt6: "Prof. Yang",
    maths3t1: "Dr. Patel",
    maths3t2: "Prof. Kumar",
    maths3t3: "Dr. Rao",
    maths3t4: "Prof. Gupta",
    maths3t5: "Dr. Desai",
    maths3t6: "Prof. Mehta",
    toct1: "Dr. Adams",
    toct2: "Prof. Bell",
    toct3: "Dr. Carter",
    toct4: "Prof. Davis",
    toct5: "Dr. Evans",
    toct6: "Prof. Foster",
    fogt1: "Dr. Green",
    fogt2: "Prof. Hall",
    fogt3: "Dr. Harris",
    fogt4: "Prof. King",
    fogt5: "Dr. Lewis",
    fogt6: "Prof. Moore",
  };

  const pdfs = {
    cnt1: [
      "cn1-m1",
      "cn1-m2",
      "cn1-m3",
      "cn1-m4",
      "cn1-m5",
      "cn1-m6",
      "cn1-m7",
    ],
    cnt2: [
      "cn2-m1",
      "cn2-m2",
      "cn2-m3",
      "cn2-m4",
      "cn2-m5",
      "cn2-m6",
      "cn2-m7",
    ],
    cnt3: [
      "cn3-m1",
      "cn3-m2",
      "cn3-m3",
      "cn3-m4",
      "cn3-m5",
      "cn3-m6",
      "cn3-m7",
    ],
    cnt4: [
      "cn4-m1",
      "cn4-m2",
      "cn4-m3",
      "cn4-m4",
      "cn4-m5",
      "cn4-m6",
      "cn5-m7",
    ],
    dbt1: [
      "db1-m1",
      "db1-m2",
      "db1-m3",
      "db1-m4",
      "db1-m5",
      "db1-m6",
      "db1-m7",
    ],
    dbt2: [
      "db2-m1",
      "db2-m2",
      "db2-m3",
      "db2-m4",
      "db2-m5",
      "db2-m6",
      "db2-m7",
    ],
    dbt3: [
      "db3-m1",
      "db3-m2",
      "db3-m3",
      "db3-m4",
      "db3-m5",
      "db3-m6",
      "db3-m7",
    ],
    dbt4: [
      "db4-m1",
      "db4-m2",
      "db4-m3",
      "db4-m4",
      "db4-m5",
      "db4-m6",
      "db4-m7",
    ],
  };

  const pdfNames = {
    "cn1-m1": "CN Module 1",
    "cn1-m2": "CN Module 2",
    "cn1-m3": "CN Module 3",
    "cn1-m4": "CN Module 4",
    "cn1-m5": "CN Module 5",
    "cn1-m6": "CN Module 6",
    "cn1-m7": "CN Module 7",

    "cn2-m1": "CN Module 1",
    "cn2-m2": "CN Module 2",
    "cn2-m3": "CN Module 3",
    "cn2-m4": "CN Module 4",
    "cn2-m5": "CN Module 5",
    "cn2-m6": "CN Module 6",
    "cn2-m7": "CN Module 7",

    "cn3-m1": "CN Module 1",
    "cn3-m2": "CN Module 2",
    "cn3-m3": "CN Module 3",
    "cn3-m4": "CN Module 4",
    "cn3-m5": "CN Module 5",
    "cn3-m6": "CN Module 6",
    "cn3-m7": "CN Module 7",

    "cn4-m1": "CN Module 1",
    "cn4-m2": "CN Module 2",
    "cn4-m3": "CN Module 3",
    "cn4-m4": "CN Module 4",
    "cn4-m5": "CN Module 5",
    "cn4-m6": "CN Module 6",
    "cn4-m7": "CN Module 7",

    "db1-m1": "DB Module 1",
    "db1-m2": "DB Module 2",
    "db1-m3": "DB Module 3",
    "db1-m4": "DB Module 4",
    "db1-m5": "DB Module 5",
    "db1-m6": "DB Module 6",
    "db1-m7": "DB Module 7",

    "db2-m1": "DB Module 1",
    "db2-m2": "DB Module 2",
    "db2-m3": "DB Module 3",
    "db2-m4": "DB Module 4",
    "db2-m5": "DB Module 5",
    "db2-m6": "DB Module 6",
    "db2-m7": "DB Module 7",

    "db3-m1": "DB Module 1",
    "db3-m2": "DB Module 2",
    "db3-m3": "DB Module 3",
    "db3-m4": "DB Module 4",
    "db3-m5": "DB Module 5",
    "db3-m6": "DB Module 6",
    "db3-m7": "DB Module 7",

    "db4-m1": "DB Module 1",
    "db4-m2": "DB Module 2",
    "db4-m3": "DB Module 3",
    "db4-m4": "DB Module 4",
    "db4-m5": "DB Module 5",
    "db4-m6": "DB Module 6",
    "db4-m7": "DB Module 7",
  };

  const Links = {
    "cn1-m1": {
      url: [
        "https://example.com/cn1-m1.pdf",
        "https://example.com/cn1-m1.pdf",
        "https://example.com/cn1-m1.pdf",
        "https://example.com/cn1-m1.pdf",
        "https://example.com/cn1-m1.pdf",
      ],
      text: [
        "intro to 1",
        "intro to 2",
        "intro to 3",
        "intro to 4",
        "intro to 5",
      ],
    },
    "cn1-m2": { url: ["https://example.com/cn1-m2"], text: ["intro 2"] },
    "cn1-m3": { url: ["https://example.com/cn1-m3"], text: ["intro 3"] },
    "cn2-m1": { url: ["https://example.com/cn2-m1.pdf"], text: ["intro to"] },
    "cn2-m2": { url: ["https://example.com/cn2-m2"], text: ["intro 2"] },
    "cn2-m3": { url: ["https://example.com/cn2-m3"], text: ["intro 3"] },
    "cn3-m1": { url: ["https://example.com/cn3-m1.pdf"], text: ["intro to"] },
    "cn3-m2": { url: ["https://example.com/cn3-m2"], text: ["intro 2"] },
    "cn3-m3": { url: ["https://example.com/cn3-m3"], text: ["intro 3"] },
    "cn4-m1": { url: ["https://example.com/cn4-m1.pdf"], text: ["intro to"] },
    "cn4-m2": { url: ["https://example.com/cn4-m2"], text: ["intro 2"] },
    "cn4-m3": { url: ["https://example.com/cn4-m3"], text: ["intro 3"] },
    "db1-m1": { url: ["https://example.com/db1-m1.pdf"], text: ["intro to"] },
    "db1-m2": { url: ["https://example.com/db1-m2"], text: ["intro 2"] },
    "db1-m3": { url: ["https://example.com/db1-m3"], text: ["intro 3"] },
    "db2-m1": { url: ["https://example.com/db2-m1.pdf"], text: ["intro to"] },
    "db2-m2": { url: ["https://example.com/db2-m2"], text: ["intro 2"] },
    "db2-m3": { url: ["https://example.com/db2-m3"], text: ["intro 3"] },
    "db3-m1": { url: ["https://example.com/db3-m1.pdf"], text: ["intro to"] },
    "db3-m2": { url: ["https://example.com/db3-m2"], text: ["intro 2"] },
    "db3-m3": { url: ["https://example.com/db3-m3"], text: ["intro 3"] },
    "db4-m1": { url: ["https://example.com/db4-m1.pdf"], text: ["intro to"] },
    "db4-m2": { url: ["https://example.com/db4-m2"], text: ["intro 2"] },
    "db4-m3": { url: ["https://example.com/db4-m3"], text: ["intro 3"] },
  };

  const handleClick = async (file) => {
    setFilename(file);
    const data = { filename: file };
    const url = "http://localhost:4000/pdfs/getpdf";
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        setFileUrl(`http://localhost:4000/${res.data.pdf.filepath}`);
        setError("");
        alert("PDF found successfully");
      } else {
        setFileUrl(null);
        setError("PDF still not uploaded");
      }
    } catch (err) {
      console.log(err);
      setFileUrl(null);
      setError("An error occurred while fetching the PDF");
    }
  };

  return (
    <div className="page2-container">
      <h3 className="page2-title">
        Hey, this is the modules page for {teacherNames[category]}
      </h3>
      <div className="button-container">
        {pdfs[category] &&
          pdfs[category].map((pdf) => (
            <button
              key={pdf}
              type="button"
              onClick={() => handleClick(pdf)}
              className="pdf-button"
            >
              {pdfNames[pdf]}
            </button>
          ))}
      </div>
      <div className="file-container">
        {fileUrl ? (
          <div>
            <h3>File</h3>
            <a href={fileUrl} download={filename} className="download-link">
              Download {filename}
            </a>
          </div>
        ) : error ? (
          <div>
            <p className="error-message">{error}</p>
          </div>
        ) : null}
        <div className="links-container">
          {pdfs[category] &&
            pdfs[category].map((pdf, index) =>
              Links[pdf] ? (
                Array.isArray(Links[pdf].url) ? (
                  Links[pdf].url.map((url, i) => (
                    <div key={`${index}-${i}`} className="link-item">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {Links[pdf].text[i]}
                      </a>
                    </div>
                  ))
                ) : (
                  <div key={index} className="link-item">
                    <a
                      href={Links[pdf].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Links[pdf].text}
                    </a>
                  </div>
                )
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}

export default Page2;
