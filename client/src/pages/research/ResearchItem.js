import React from "react";
import "./researchItem.css";

const ResearchItem = ({ title, summary }) => {
  return (
    <div className="r-app">
      <div className="r-item">
        <br />
        <h2>
          {/* <a href={url} class="res" target="_blank"> */}
          <a class="res" target="_blank">
            {title}
          </a>
        </h2>
        <br />
        <p class="des">{summary}</p>
        <br />
        {/* <h4 class="auth">Author: {author}</h4> */}
      </div>
    </div>
  );
};

export default ResearchItem;
