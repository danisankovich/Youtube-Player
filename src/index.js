import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDd1Iqcw5HsouixNOA_ZCsA_bjIs4DbK-s';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [] ,
      selectedVideo: null,
    }
    YTSearch({key: API_KEY, term: 'Oregairu Preview'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
