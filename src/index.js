import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyDLrT2LFyJvGk-Za6421REevkan8OneKF4';

//create a new component. This component should produce some html
const App = function(){
  // console.log(this);
  return (<div>
            <SearchBar />
        </div>
      );
}

ReactDOM.render(<App />,document.querySelector('.container'));
