import React, { Component } from "react";

export default class Post extends Component {
  render() {
    const item = this.props.postData
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={item.img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.caption}</p>
          <small>{item.author}</small>
        </div>
      </div>
    );
  }
}
