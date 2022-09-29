import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    console.log('constructed the HOME component')
  }

  componentDidMount() {
    console.log('mounted the HOME component')
  }

  render() {
    console.log('rendered the HOME component')
    return (
      <div>This is the home page</div>
    )
  }
}
