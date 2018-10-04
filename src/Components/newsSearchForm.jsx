import React, { Component } from "react";
class NewsSearchForm extends Component {
  state = {
    searchTerm: ""
  };
  render() {
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            id="searchTerm"
            type="text"
            className="form-control"
            placeholder="Search Term"
            value={this.state.searchTerm}
            onChange={e => this.updateSearchTerm(e)}
          />
          <button className="btn btn-primary" onClick={e => this.getNews(e)}>
            Get News
          </button>
        </div>
      </form>
    );
  }

  updateSearchTerm = e => {
    this.setState({ searchTerm: e.target.value });
  };
  getNews = e => {
    e.preventDefault();
    this.props.getNews(this.state);
    this.setState({ searchTerm: "" });
  };
}

export default NewsSearchForm;
