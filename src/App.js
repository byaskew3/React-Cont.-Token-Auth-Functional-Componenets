import Navbar from './components/Navbar';
import Contact from './views/Contact'
import Home from './views/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import News from './views/News';
import Feed from './views/Feed';
import SignUp from './views/SignUp';
import Login from './views/Login';
import CreatePost from './views/CreatePost';
import UpdatePost from './views/UpdatePost';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
    }
  }

  logMeIn = (data) => {
    this.setState({user: data})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact /> }></Route> 
            <Route path='/news' element={<News />}></Route>
            <Route path='/feed' element={<Feed />}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}></Route>
            <Route path='/posts/create' element={<CreatePost user={this.state.user}/>}></Route>
            <Route path='/posts/update/:postid' element={<UpdatePost user={this.state.user}/>}></Route>
          </Routes>
          <p>Loading....</p>
        </div>
      </BrowserRouter>
    )
  }
}

