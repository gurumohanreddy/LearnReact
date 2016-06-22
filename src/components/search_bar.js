import React,{Component} from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props){
    super(props);
    // console.log(this);
    this.state={term:''};
  }

  render(){
    // console.log( this);
    return (
      <div>
      <input
      value={this.state.term}
      onChange={event=> this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
