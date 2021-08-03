import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const MyComponent = () => {
  const [ value, setValue ] = useState(50); 

  return (
    <RangeSlider
      value={value}
      step={10}
      onChange={changeEvent => setValue(Number(changeEvent.target.value))}
    />
  );
};

export default MyComponent;