import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Page2.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function Page3() {
  const { category } = useParams();
  const [filename, setFilename] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  // const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const pdfs = {
    awst1: [
      "aws1-m1",
      "aws1-m2",
      "aws1-m3",
      "aws1-m4",
      "aws1-m5",
      "aws1-m6",
      "aws1-m7",
    ],
    awst2: [
      "aws2-m1",
      "aws2-m2",
      "aws2-m3",
      "aws2-m4",
      "aws2-m5",
      "aws2-m6",
      "aws2-m7",
    ],
    awst3: [
      "aws3-m1",
      "aws3-m2",
      "aws3-m3",
      "aws3-m4",
      "aws3-m5",
      "aws3-m6",
      "aws3-m7",
    ],
    awst4: [
      "aws4-m1",
      "aws4-m2",
      "aws4-m3",
      "aws4-m4",
      "aws4-m5",
      "aws4-m6",
      "aws4-m7",
    ],

    awst5: [
      "aws5-m1",
      "aws5-m2",
      "aws5-m3",
      "aws5-m4",
      "aws5-m5",
      "aws5-m6",
      "aws5-m7",
    ],

    awst6: [
      "aws6-m1",
      "aws6-m2",
      "aws6-m3",
      "aws6-m4",
      "aws6-m5",
      "aws6-m6",
      "aws6-m7",
    ],

    awst7: [
      "aws7-m1",
      "aws7-m2",
      "aws7-m3",
      "aws7-m4",
      "aws7-m5",
      "aws7-m6",
      "aws7-m7",
    ],

    ait1: [
      "ai1-m1",
      "ai1-m2",
      "ai1-m3",
      "ai1-m4",
      "ai1-m5",
      "ai1-m6",
      "ai1-m7",
    ],
    ait2: [
      "ai2-m1",
      "ai2-m2",
      "ai2-m3",
      "ai2-m4",
      "ai2-m5",
      "ai2-m6",
      "ai2-m7",
    ],
    ait3: [
      "ai3-m1",
      "ai3-m2",
      "ai3-m3",
      "ai3-m4",
      "ai3-m5",
      "ai3-m6",
      "ai3-m7",
    ],

    ait4: [
      "ai4-m1",
      "ai4-m2",
      "ai4-m3",
      "ai4-m4",
      "ai4-m5",
      "ai4-m6",
      "ai4-m7",
    ],

    ait5: [
      "ai5-m1",
      "ai5-m2",
      "ai5-m3",
      "ai5-m4",
      "ai5-m5",
      "ai5-m6",
      "ai5-m7",
    ],

    ait6: [
      "ai6-m1",
      "ai6-m2",
      "ai6-m3",
      "ai6-m4",
      "ai6-m5",
      "ai6-m6",
      "ai6-m7",
    ],

    ait7: [
      "ai7-m1",
      "ai7-m2",
      "ai7-m3",
      "ai7-m4",
      "ai7-m5",
      "ai7-m6",
      "ai7-m7",
    ],

    set1: [
      "se1-m1",
      "se1-m2",
      "se1-m3",
      "se1-m4",
      "se1-m5",
      "se1-m6",
      "se1-m7",
    ],
    set2: [
      "se2-m1",
      "se2-m2",
      "se2-m3",
      "se2-m4",
      "se2-m5",
      "se2-m6",
      "se2-m7",
    ],
    set3: [
      "se3-m1",
      "se3-m2",
      "se3-m3",
      "se3-m4",
      "se3-m5",
      "se3-m6",
      "se3-m7",
    ],

    set4: [
      "se4-m1",
      "se4-m2",
      "se4-m3",
      "se4-m4",
      "se4-m5",
      "se4-m6",
      "se4-m7",
    ],
    set5: [
      "se5-m1",
      "se5-m2",
      "se5-m3",
      "se5-m4",
      "se5-m5",
      "se5-m6",
      "se5-m7",
    ],
    set6: [
      "se6-m1",
      "se6-m2",
      "se6-m3",
      "se6-m4",
      "se6-m5",
      "se6-m6",
      "se6-m7",
    ],
    set7: [
      "se7-m1",
      "se7-m2",
      "se7-m3",
      "se7-m4",
      "se7-m5",
      "se7-m6",
      "se7-m7",
    ],

    weart1: [
      "wear1-m1",
      "wear1-m2",
      "wear1-m3",
      "wear1-m4",
      "wear1-m5",
      "wear1-m6",
      "wear1-m7",
    ],
    weart2: [
      "wear2-m1",
      "wear2-m2",
      "wear2-m3",
      "wear2-m4",
      "wear2-m5",
      "wear2-m6",
      "wear2-m7",
    ],
    weart3: [
      "wear3-m1",
      "wear3-m2",
      "wear3-m3",
      "wear3-m4",
      "wear3-m5",
      "wear3-m6",
      "wear3-m7",
    ],
    weart4: [
      "wear4-m1",
      "wear4-m2",
      "wear4-m3",
      "wear4-m4",
      "wear4-m5",
      "wear4-m6",
      "wear4-m7",
    ],
    weart5: [
      "wear5-m1",
      "wear5-m2",
      "wear5-m3",
      "wear5-m4",
      "wear5-m5",
      "wear5-m6",
      "wear5-m7",
    ],
    weart6: [
      "wear6-m1",
      "wear6-m2",
      "wear6-m3",
      "wear6-m4",
      "wear6-m5",
      "wear6-m6",
      "wear6-m7",
    ],
    weart7: [
      "wear7-m1",
      "wear7-m2",
      "wear7-m3",
      "wear7-m4",
      "wear7-m5",
      "wear7-m6",
      "wear7-m7",
    ],

    daat1: [
      "daa1-m1",
      "daa1-m2",
      "daa1-m3",
      "daa1-m4",
      "daa1-m5",
      "daa1-m6",
      "daa1-m7",
    ],
    daat2: [
      "daa2-m1",
      "daa2-m2",
      "daa2-m3",
      "daa2-m4",
      "daa2-m5",
      "daa2-m6",
      "daa2-m7",
    ],
    daat3: [
      "daa3-m1",
      "daa3-m2",
      "daa3-m3",
      "daa3-m4",
      "daa3-m5",
      "daa3-m6",
      "daa3-m7",
    ],
    daat4: [
      "daa4-m1",
      "daa4-m2",
      "daa4-m3",
      "daa4-m4",
      "daa4-m5",
      "daa4-m6",
      "daa4-m7",
    ],
    daat5: [
      "daa5-m1",
      "daa5-m2",
      "daa5-m3",
      "daa5-m4",
      "daa5-m5",
      "daa5-m6",
      "daa5-m7",
    ],
    daat6: [
      "daa6-m1",
      "daa6-m2",
      "daa6-m3",
      "daa6-m4",
      "daa6-m5",
      "daa6-m6",
      "daa6-m7",
    ],
    daat7: [
      "daa7-m1",
      "daa7-m2",
      "daa7-m3",
      "daa7-m4",
      "daa7-m5",
      "daa7-m6",
      "daa7-m7",
    ],
  };

  const teachernames = {
    set1: "teacher1",
    set2: "teacher2",
    set3: "teacher3",
    set4: "teacher4",
    set5: "teacher5",
    set6: "teacher6",
    set7: "teacher7",
    awst1: "teacher1",
    awst2: "teacher2",
    awst3: "teacher3",
    awst4: "teacher4",
    awst5: "teacher5",
    awst6: "teacher6",
    awst7: "teacher7",
    ait1: "teacher1",
    ait2: "teacher2",
    ait3: "teacher3",
    ait4: "teacher4",
    ait5: "teacher5",
    ait6: "teacher6",
    ait7: "teacher7",
    weart1: "teacher1",
    weart2: "teacher2",
    weart3: "teacher3",
    weart4: "teacher4",
    weart5: "teacher5",
    weart6: "teacher6",
    weart7: "teacher7",
    daat1: "teacher1",
    daat2: "teacher2",
    daat3: "teacher3",
    daat4: "teacher4",
    daat5: "teacher5",
    daat6: "teacher6",
    daat7: "teacher7",
  };

  const handleClick = async (file) => {
    setFilename(file);
    navigate("/Link3"); //REPLCE AFTER IS STATEMENT AFTER COMPLETION OF ALL CODE
    const data = { filename: file };
    const url = "http://localhost:4000/pdfs/getpdf";
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        // setLinks(res.data.links);
        setError("");
        alert("PDF found successfully");
      } else {
        setFileUrl(null);
        // setLinks([]);
        setError("PDF still not uploaded");
      }
    } catch (err) {
      console.log(err);
      setFileUrl(null);
      // setLinks([]);
      setError("An error occurred while fetching the PDF");
    }
  };

  return (
    <div className="page2-container">
      <h3 className="page2-title">
        Hey, this is the modules page for {teachernames[category]}
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
              {pdf}
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
      </div>
    </div>
  );
}

export default Page3;
