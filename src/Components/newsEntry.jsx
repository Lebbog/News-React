import React from "react";
const newsEntry = props => {
  const { article } = props;
  let imgUrl = article["urlToImage"];
  let url = article["url"];
  let title = article["title"];
  let description = article["description"];
  let source = article["source"]["name"];
  let publishedAt = article["publishedAt"];
  return (
    <div>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main" id="stories">
            <h4>{title}</h4>
            <img src={imgUrl} />
            <h6>{description}</h6>
            <p>Source : {source}</p>
            <p>Published at: {publishedAt}</p>
            <a href={url} target="_blank">
              Read More
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default newsEntry;
