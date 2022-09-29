import React, { Component } from 'react'

export default class CreatePost extends Component {

    sendCreateInfo = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/api/posts/create', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.props.user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: event.target.title.value,
                caption: event.target.caption.value,
                imgUrl: event.target.imgUrl.value
            })
        })
        const data = await response.json()
        console.log(data)
    }
  render() {
    return (
        <div>
        <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create a Post
              </h2>
              <form onSubmit={(event) => {this.sendCreateInfo(event)}}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="title"/>
                  <label className="form-label" htmlFor="form3Example1cg">
                    Title
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="caption" />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Caption
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="imgUrl" />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Image URL
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">
                    Create Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    )
  }
}
