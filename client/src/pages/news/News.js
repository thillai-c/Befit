import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem.js";
import "./news.css";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=fitness&apiKey=38cce3a9d27b440097c7b6f41a617924`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <div>
      <div className="contentF">
        <h1>Latest News</h1>
      </div>
      <div className="newsall">
        {articles.map((article) => {
          return (
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
