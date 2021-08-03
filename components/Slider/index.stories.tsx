import React from 'react';

import Slider from './index';

import MuiSlider from './mui.index';

export default {
  title: 'Components/Slider',
  component: Slider,
};

export const AtomSlider = () => <Slider />;

export const testSlider = () => <MuiSlider track={false} />;
