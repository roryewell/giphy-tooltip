import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header/Header';
import SelectableText from './SelectableText/SelectableText';

class GiphyAreaContainer extends Component {
  state = {
    isTooltipActive: false
  };

  showTooltip() {
    this.setState({ isTooltipActive: true });
  }

  hideTooltip() {
    this.setState({ isTooltipActive: false });
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
        <SelectableText />
      </div>
    );
  }
}

export default GiphyAreaContainer;
