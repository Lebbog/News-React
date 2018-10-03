import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import NewsEntry from "./Components/newsEntry";
import "./App.css";
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
    // const buttonStyle = {
    //   display: "block",
    //   margin: "0 auto"
    // };
    return (
      <div>
        <div id="userInput">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input
                id="searchTerm"
                type="text"
                className="form-control"
                placeholder="Search Term"
              />
              <button
                type="button"
                className="btn btn-primary"
                // style={buttonStyle}
                onClick={this.getNews}
              >
                Get News
              </button>
            </div>
          </form>
        </div>
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
        // console.log($("#searchTerm").val());
        let term = $("#searchTerm").val();
        if (term === "") console.log("Empty");
        else console.log(term);
        this.setState({ news: data, successfulRequest: true });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  };
}

export default App;
