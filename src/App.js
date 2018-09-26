import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import NewsEntry from "./Components/newsEntry";
class App extends Component {
  state = {
    news: [],
    successfulRequest: false
  };
  render() {
    const { successfulRequest } = this.state;
    let newsEntries = null;
    if (successfulRequest) {
      const { articles } = this.state.news;
      newsEntries = articles.map(article => {
        return <NewsEntry key={articles.indexOf(article)} article={article} />;
      });
    }
    return (
      <div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.getNews}
        >
          Get News
        </button>
        {successfulRequest && newsEntries}
      </div>
    );
  }
  getNews = () => {
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=247e362771cd4ac48ad01439644cccf1",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ news: data, successfulRequest: true });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  };
}

export default App;
