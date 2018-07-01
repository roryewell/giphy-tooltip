import React from 'react';

import SelectableWord from './SelectableWord/SelectableWord';

const selectableText = (props) => {
  console.log(props);
  let words = props.text
    .split(' ')
    .map((word) => {
      return (
        <SelectableWord
          word={word}
          handleMouseUp={props.handleMouseUp}
        />
      );
  });

  return (
    <div>
      {words}
    </div>
  );
};

export default selectableText;
