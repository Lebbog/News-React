import React from "react";
import "./newsEntry.css";
const newsEntry = props => {
  const { article } = props;
  let imgUrl = article["urlToImage"];
  let url = article["url"];
  let title = article["title"];
  let description = article["description"];
  let source = article["source"]["name"];
  let publishedAt = article["publishedAt"];
  return (
    <div className="newsEntry">
      <h4>{title}</h4>
      <figure>
        <img src={imgUrl} className="img-fluid" alt="Responsive image" />
        <figcaption>
          <h6>{description}</h6>
        </figcaption>
      </figure>
      <p>
        Source : <b>{source}</b>
      </p>
      <p>Published at: {publishedAt}</p>
      <a href={url} target="_blank">
        Read More
      </a>
    </div>
  );
};

export default newsEntry;
