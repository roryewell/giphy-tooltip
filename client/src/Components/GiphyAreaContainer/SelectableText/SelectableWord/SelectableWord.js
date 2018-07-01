import React from 'react';
import styles from './SelectableWord.css';

import ToolTip from 'react-portal-tooltip';

const selectableWord = (props) => {
  console.log('styles', styles);
  return (
    <span className={styles.SelectableWord}>
      <span className={styles.Text} onMouseUp={props.handleMouseUp}>{props.word}</span>
      <ToolTip active={true} position="top" arrow="center" parent="#word">
        <div>
          <p>testing</p>
          {/* <iframe src="https://giphy.com/embed/dAm0FP5UP93dC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lion-baby-dAm0FP5UP93dC">via GIPHY</a></p> */}
        </div>
      </ToolTip>
    </span>
  );
};

export default selectableWord;
