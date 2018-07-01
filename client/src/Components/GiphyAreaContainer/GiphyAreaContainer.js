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

  searchGiphyResults() {

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
