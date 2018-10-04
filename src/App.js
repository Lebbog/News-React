import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import NewsEntry from "./Components/newsEntry";
import "./App.css";
import NewsForm from "./Components/newsSearchForm";

class App extends Component {
  state = {
    // searchFields: {},
    news: [],
    successfulRequest: false
  };
  getNews = searchForm => {
    const { searchTerm } = searchForm;
    let fetchUrl = "";
    if (searchTerm === "") {
      //User did not enter a search term
      fetchUrl =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=247e362771cd4ac48ad01439644cccf1";
    } else {
      fetchUrl =
        "https://newsapi.org/v2/top-headlines?" +
        "q=" +
        searchTerm +
        "&apiKey=247e362771cd4ac48ad01439644cccf1";
    }
    console.log(fetchUrl);
    fetch(fetchUrl)
      .then(response => {
        if (response.status !== 200) {
          console.log("Error, Status Code: " + response.status);
          return;
        }
        response.json().then(data => {
          console.log(data);
          this.setState({
            news: data,
            successfulRequest: true
          });
        });
      })
      .catch(function(err) {
        console.log("Fetch error :-S", err);
      });
  };
  render() {
    const { successfulRequest } = this.state;
    let newsEntries = null;
    if (successfulRequest) {
      const { articles } = this.state.news;
      if (articles.length === 0) {
        newsEntries = <h2>No Results </h2>;
      } else {
        newsEntries = articles.map(article => {
          return (
            <NewsEntry key={articles.indexOf(article)} article={article} />
          );
        });
      }
    }
    console.log(this.state);
    return (
      <div>
        <NewsForm getNews={searchForm => this.getNews(searchForm)} />
        {successfulRequest && newsEntries}
      </div>
    );
  }
  // getNews = () => {
  //   $.ajax({
  //     url:
  //       "https://newsapi.org/v2/top-headlines?" +
  //       "country=us&" +
  //       "apiKey=247e362771cd4ac48ad01439644cccf1",
  //     dataType: "json",
  //     cache: false,
  //     success: function(data) {
  //       // console.log($("#searchTerm").val());
  //       let term = $("#searchTerm").val();
  //       if (term === "") console.log("Empty");
  //       else console.log(term);
  //       this.setState({ news: data, successfulRequest: true });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log(err);
  //     }
  //   });
  // };
}

export default App;
