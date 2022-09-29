import React, { Component } from 'react'

export default class Login extends Component {
  sendLoginInfo = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    })
    const data = await response.json()
    console.log(data)

    if (data.status === 'ok'){
      this.props.logMeIn(data.data)
    }
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
                Login to your account
              </h2>
              <form onSubmit={(event) => {this.sendLoginInfo(event)}}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="username"/>
                  <label className="form-label" htmlFor="form3Example1cg">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example3cg" className="form-control form-control-lg" name="password" />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">
                    Login
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
