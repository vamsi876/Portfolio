import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Python", progress: 85, className: "python-progress", years: 3 },
    { name: "HTML/CSS/JS", progress: 75, className: "web-progress", years: 3 },
    { name: "SQL", progress: 37.5, className: "sql-progress", years: 1.5 },
    { name: "C", progress: 80, className: "c-progress", years: 3 },
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
