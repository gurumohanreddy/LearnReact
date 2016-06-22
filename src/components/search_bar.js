import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={term:''};
  }

  render(){
    // console.log(this);
    return (
      <div>
      <input
      value={this.state.term}
      onChange={event=> this.setState({term: event.target.value})}/>
      </div>
    );
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }

}

export default SearchBar;
