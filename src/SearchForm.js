import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    // let mode = 'search/movie?query=',
    // key = '20be76fa876d00e6aa495c12f6f54c0e&',
    let url = 'https://api.themoviedb.org/3/search/multi?api_key=20be76fa876d00e6aa495c12f6f54c0e&language=en-US&query='+ this.state.value +'&page=1&include_adult=false'
    fetch(url)
    .then(
      function(res) {
        if (res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          res.status);
          return;
        }

        res.json().then(function(data) {
          console.log(this)
          this.props.onUpdate(data.results[0]);
        }.bind(this))
      }.bind(this)
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
