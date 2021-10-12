import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News js");

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm ");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=3e7b6e4f494548c9a4267dc4ff808a86&page=1&pageSize=20";

    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
    });

    console.log(this.state.totalResult)
  }

  handlePrevClick = async () => {
    console.log("Previous button clicked");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e7b6e4f494548c9a4267dc4ff808a86&page=${
      this.state.page - 1
    }&pageSize=20`;

    let data = await fetch(url);
    let parsedData  = await data.json();
  
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })

  };

  handleNextClick = async () => {
    console.log("Next button is clicked");
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {
      
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e7b6e4f494548c9a4267dc4ff808a86&page=${
        this.state.page + 1
      }&pageSize=20`;

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container my-4">
        <h2>NewsHunter - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem
                  title={elem.title}
                  description={elem.description}
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
