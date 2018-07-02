import React, { Component } from 'react';
import styles from './GiphyAreaContainer.css';
import axios from 'axios';

import Header from './Header/Header';
import BodyText from './BodyText/BodyText';

class GiphyAreaContainer extends Component {
  state = {
    text: 'Sample text with a dog, cat, bull, and bird',
    isTooltipActive: false,
    selectedText: '',
    gifUrl: '',
    gifLeftPosition: '',
    gifTopPosition: ''
  }

  showTooltip = () => {
    this.setState({ isTooltipActive: true });
  }

  hideTooltip = () => {
    this.setState({ isTooltipActive: false });
  }

  handleMouseUp = async () => {
    if (window.getSelection()) {
      let selectedText = window.getSelection().toString();

      if (selectedText) {
        this.setState({ selectedText: selectedText });
        this.searchGiphyResults(selectedText);
      } else {
        this.clearSelectedTextData();
      }
    }
  }

  searchGiphyResults = async (query) => {
    try {
      const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
      let gifUrl = response.data.data[0].images.fixed_width.url;
      this.setState({ gifUrl: gifUrl });
    } catch (error) {
      this.clearSelectedTextData();
      console.log('Error retrieving GIFs from Giphy');
    }
  }

  clearSelectedTextData = () => {
    this.setState({
      selectedText: '',
      gifUrl: '',
      gifLeftPosition: '',
      gifTopPosition: ''
    });
  }

  render() {
    return (
      <div
        className={styles.GiphyAreaContainer}
        onMouseUp={this.handleMouseUp}>
        <div></div>
        <Header />
        <BodyText
          text={this.state.text}
          selectedText={this.state.selectedText}
          handleMouseUp={this.handleMouseUp}
          gifUrl={this.state.gifUrl}
          gifLeftPosition={this.state.gifLeftPosition}
          gifTopPosition={this.state.gifTopPosition}
        />
      </div>
    );
  }
}

export default GiphyAreaContainer;
