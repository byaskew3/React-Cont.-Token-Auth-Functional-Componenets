import React, { Component } from 'react'
import Post from '../components/Post'

export default class Feed extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount = async () => {
        this.getPosts()
    }

    getPosts = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/posts');
        const data = await response.json()
        this.setState({posts: data.posts})
    }

    showPosts = () => {
        return this.state.posts.map((item) => {
            return (
                <div>
                    <Post key={item.id} postData={item}/>
                </div>
            )
        })
    }

    render() {
        return (
        <div>
            {this.showPosts()}
        </div>
        )
    }
}
