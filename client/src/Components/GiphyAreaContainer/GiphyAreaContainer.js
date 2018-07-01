import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header/Header';
import SelectableText from './SelectableText/SelectableText';

class GiphyAreaContainer extends Component {
  state = {
    text: 'Sample text with a dog, cat, bull, and bird',
    isTooltipActive: false,
    selectedText: '',
    activeGifUrl: ''
  };

  showTooltip = () => {
    this.setState({ isTooltipActive: true });
  }

  hideTooltip = () => {
    this.setState({ isTooltipActive: false });
  }

  handleMouseUp = () => {
    if (window.getSelection()) {
      let selectedText = window.getSelection().toString();
      console.log('selected text', selectedText);
      this.setState({ selectedText: selectedText });
    }
  }

  async searchGiphyResults(query) {
    try {
      const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
      console.log('response', response);
    } catch (error) {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <SelectableText
          text={this.state.text}
          handleMouseUp={this.handleMouseUp}
        />
      </div>
    );
  }
}

export default GiphyAreaContainer;
