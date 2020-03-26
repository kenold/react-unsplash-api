import React, { Component } from "react";
import { api } from "./Auth";
import PostFeed from "./components/PostFeed";

const accessKey = api.key;
const endPoint = api.endPoint;
const params = api.params;

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    fetch(endPoint + "/?client_id=" + accessKey + params)
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data });
        // console.log(this.state.photos);
        // console.log(JSON.stringify(this.state.photos));
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }
  render() {
    return (
      <div>
        <PostFeed photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
