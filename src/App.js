import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import TrailersContainer from './TrailersContainer'

class App extends Component {
  // componentWillMount(){
  //   // called the first time the search is loadedtight b4 component is added to the page
  //   var url = 'http://api.themoviedb.org/3/',
  //   mode = 'search/movie?query=',
  //   input;
  //   key = '20be76fa876d00e6aa495c12f6f54c0e'
  // }

  // componentDidMount(){
  //   // called after the component has been rendered to the page
  // }
  constructor(){
    super();
    this.state = {results:{}}
    this.updateResult = this.updateResult.bind(this);
  }

  updateResult(newResult) {
    this.setState({result: newResult })
  }

  render() {
    return (
      <div className="body">

        <section className="navContainer">
          <NavBar/>
        </section>

        <section className="container">
          <TrailersContainer  onUpdate={this.updateResult} data={JSON.stringify(this.state.result)} />
        </section>

        <section className="newsFeed">

        </section>
        {/* {this.state.movies.map( (movie, i) => <p>{movie.title}</p>)} */}
      </div>
    );
  }
}

export default App;
