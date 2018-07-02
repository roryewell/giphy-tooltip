import React, { Component } from 'react';
import styles from './GiphyAreaContainer.css';
import axios from 'axios';

import Header from './Header/Header';
import BodyText from './BodyText/BodyText';

class GiphyAreaContainer extends Component {
  state = {
    text: 'Sample text with a dog, cat, bull, and bird!',
    isTooltipActive: false,
    selectedText: '',
    gif: '',
    gifLeftPosition: '',
    gifTopPosition: '',
    textWidth: ''
  }

  handleMouseUp = (event) => {
    if (window.getSelection()) {
      let selectedText = window.getSelection().toString();

      if (selectedText) {
        let range = window.getSelection().getRangeAt(0);
        let rect = range.getBoundingClientRect();

        this.setState({ selectedText: selectedText, gifLeftPosition: rect.left, gifTopPosition: rect.top + 30, textWidth: rect.width });
        this.searchGiphyResults(selectedText);
      } else {
        this.clearSelectedTextData();
      }
    }
  }

  searchGiphyResults = async (query) => {
    try {
      if (query) {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
        let gif = response.data.data[0].images.fixed_width;
        this.setState({ gif: gif });
      }
    } catch (error) {
      this.clearSelectedTextData();
      console.log('Error retrieving GIFs from Giphy');
    }
  }

  clearSelectedTextData = () => {
    this.setState({
      selectedText: '',
      gif: '',
      gifLeftPosition: '',
      gifTopPosition: '',
      textWidth: ''
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
          gif={this.state.gif}
          gifLeftPosition={this.state.gifLeftPosition}
          gifTopPosition={this.state.gifTopPosition}
          textWidth={this.state.textWidth}
        />
      </div>
    );
  }
}

export default GiphyAreaContainer;
