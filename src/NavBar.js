import React, { Component } from 'react';
import SearchForm from './SearchForm';
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <section className="App-intro">
          <h1>IMDB Clone</h1>
        </section>
        <ul className="App">

          <li className="searchForm">
            <SearchForm />
          </li>

          <li className="TitleMenu">
            <p className="navCategory"><a href="http://www.google.com">Movies, TV & Showtimes</a></p>
          </li>

          <li className="NameMenu">
            <p className="navCategory"><a href="http://www.google.com">Celeb, Events, & Photos</a></p>
          </li>

          <li className="NewsMenu">
            <p className="navCategory"><a href="http://www.google.com">News & community</a></p>
          </li>

          <li className="WatchListMenu">
            <p className="navCategory"><a href="http://www.google.com">WatchList</a></p>
          </li>

        </ul>

      </div>
        );
      }
    }
