import React, { Component } from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component{
  constructor(){
    super();
    this.state = {inputValue: '', hasReceivedInput: false};
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleEvent(event){
    const value = event.target.value;
    this.setState({
      inputValue: value,
      hasReceivedInput: true
    });
  }

  handleSubmission(event){
    event.preventDefault();
    this.props.postSubmission(this.state.inputValue);

    this.setState({inputValue: '', hasReceivedInput: false});
  }

  render(){
    return (<NewPlaylist hasReceivedInput = {this.state.hasReceivedInput} inputValue = {this.state.inputValue} handleEvent = {this.handleEvent} handleSubmission = {this.handleSubmission} />);
  }


}
