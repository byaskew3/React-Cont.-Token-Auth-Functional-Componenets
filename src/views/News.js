import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        super()
        // initial state
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const response = await fetch('https://newsapi.org/v2/everything?q=nfl&apiKey=ece18abb06b7439bad7761e353492719&pageSize=20');
        const data = await response.json()
        console.log(data)
        this.setState({articles: data.articles})
    }


    search = async (event) => {
        event.preventDefault();
        const input = event.target.search.value
        const response = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=ece18abb06b7439bad7761e353492719&pageSize=10`);
        const data = await response.json()
        console.log(data)
        this.setState({articles: data.articles})
    }

    render() {
        return (
        <div>
            <form className="d-flex justify-content-center" role="search" onSubmit={this.search}>
                <input className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search" name='search'/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className='row'>
            {this.state.articles.map((item, index) => {
                return (
                    <Article key={index} articleData={item}/>
                )
            })}
            </div>
        </div>
       
        )
    }
}
