import * as React from 'react';
import classes from './Label.module.css';
import { CSSProperties } from 'react';
import { LabelProps } from 'types/State';

const makeLabelStyle = (props: LabelProps) => {
  const borderStyle: CSSProperties = props.style.frame
    ? {}
    : { border: 'none' };
  const labelStyle = {
    ...borderStyle,
    width: props.style.width + 'mm',
    textAlign: props.style.align,
    fontSize: props.style.fontSize + 'px',
  };
  return labelStyle;
};

const makeLabelRowStyle = (props: LabelProps) => {
  const borderStyle: CSSProperties = props.style.frame
    ? {}
    : { border: 'none' };
  return borderStyle;
};

const Label = (props: LabelProps) => {
  const labelStyle = makeLabelStyle(props);
  const rowStyle = makeLabelRowStyle(props);

  const rows = props.content.map((v, i) => (
    <div className={classes.label__row} style={i === 1 ? {...rowStyle, fontStyle: 'italic'} : rowStyle} key={i}>
      <div>{v}</div>
    </div>
  ));
  return (
    <div className={classes.label} style={labelStyle}>
      {rows}
    </div>
  );
};

export default Label;
