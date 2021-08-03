import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

type Props = {
  track: any;
};

const Component:FC<Props> = ({ track }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        color="primary"
        valueLabelDisplay="off"
        track={track}
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
}

export default Component;