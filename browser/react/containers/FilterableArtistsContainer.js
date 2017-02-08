import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';


export default class FilterableArtistsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event){
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {
    const desiredArtist = this.state.inputValue;
    const matchingArtist = this.props.artists.filter(artist => (artist.name === desiredArtist));

    return (
            <div>
              <FilterInput handleEvent={this.handleEvent} />
              <Artists artists={matchingArtist} />
            </div>
            );
  }

}
