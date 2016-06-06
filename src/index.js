import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDd1Iqcw5HsouixNOA_ZCsA_bjIs4DbK-s';
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
