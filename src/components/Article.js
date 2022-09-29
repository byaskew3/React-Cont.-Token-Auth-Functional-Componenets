import React, { Component } from "react";

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
  render() {
    const item = this.props.articleData
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={item.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href={item.url} className="btn btn-primary">
            Full Article
          </a>
        </div>
      </div>
    );
  }
}
