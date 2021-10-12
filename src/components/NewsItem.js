import React, { Component } from "react";
import './Style.css'

export class NewsItem extends Component {

  render() {
      let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className = 'my-3 main'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl ? "https://images.indianexpress.com/2021/08/ramiz-raja.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel = 'noreferrer' href={newsUrl} target = '_blank' className="btn btn-sm btn-primary">
              More Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
