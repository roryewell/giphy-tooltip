import React from 'react';
import styles from './BodyText.css';

const bodyText = (props) => {
  let tooltip = null;

  if (props.selectedText) {
    tooltip = (
      <div id="tooltip" className={styles.Tooltip}>
        Testing this
        <img src={props.gifUrl} alt="Crazy GIF"/>
      </div>
    );
  }

  console.log('tooltip', tooltip);

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
