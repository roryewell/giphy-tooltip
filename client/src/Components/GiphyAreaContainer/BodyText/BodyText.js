import React from 'react';
import styles from './BodyText.css';

const bodyText = (props) => {
  let tooltip = null;

  if (props.selectedText && props.gif) {
    let gif = (
      <img src={props.gif.url} alt="Crazy GIF"/>
    );

    let tooltipPosition = {
      left: props.gifLeftPosition - ((props.gif.width ? props.gif.width : 200) / 2) - 15 + (props.textWidth / 2) + 'px',
      top: props.gifTopPosition + 'px'
    };

    tooltip = (
      <div id="tooltip" style={tooltipPosition} className={styles.Tooltip}>
        {gif}
      </div>
    );
  }

  return (
    <div className={styles.BodyText}>
      {tooltip}
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default bodyText;
