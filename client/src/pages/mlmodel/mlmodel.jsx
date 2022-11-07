import React, { useState, useEffect } from "react";
import axios from "axios";
import "./mlmodel.css";

const MlModel = () => {
  const [articles, setArticles] = useState([]);

  return (
    <div className="container1">
      <h1>Put all excuses aside and remember this: You are capable.</h1>
      <p>
        Some people want it to happen, some wish it would happen, others make it
        happen{" "}
      </p>
      <div class="email-box">
        <a href="https://befit-tracker.netlify.app/" target="_blank">
          <button class="btn" type="button" name="button">
            EXERCISE NOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default MlModel;
