
ls
import React, { Component } from 'react';



class TrailersContainer extends Component {
  render() {
    return (
      <div className="">
        <section className="leftWidget">
          {this.props.data}
        </section>

        {/* <section className="centerWidget">
          <img src="https://source.unsplash.com/random" alt="Smiley face" height="auto" width="201" />
        </section>

        <section className="rightWidget">
          <img src="https://source.unsplash.com/random" alt="Smiley face" height="auto" width="201" />
        </section> */}
      </div>
    );
  }
}

export default TrailersContainer;
