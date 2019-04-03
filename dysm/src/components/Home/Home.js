import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
            <div className="ui huge header segment stacked"  style={{ textAlign: "center" }}>
                <h2>Home Component</h2>
                <p>This is the splash page!</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Home
