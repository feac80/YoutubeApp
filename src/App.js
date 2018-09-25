import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyBkwfJrKfdiDH46XaDLQelzGe84md52GXU";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchVideo("Flamenco");
  }

  searchVideo(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div>
        <SearchBar searchVideo={term => this.searchVideo(term)} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
        />
      </div>
    );
  }
}

export default App;
