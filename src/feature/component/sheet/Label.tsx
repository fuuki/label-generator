import * as React from 'react';
import classes from './Label.module.css';
import { CSSProperties } from 'react';
import { LabelContent } from 'feature/dataSlice';
import { LabelStyle } from 'feature/styleSlice';

export interface LabelProps {
  content: LabelContent;
  style: LabelStyle;
}

const makeLabelStyle = (props: LabelProps) => {
  const borderStyle: CSSProperties = props.style.frame
    ? {}
    : { border: 'none' };
  const labelStyle = {
    ...borderStyle,
    width: props.style.width + 'mm',
  };
  return labelStyle;
};

const makeLabelRowStyles = (labelStyle: LabelStyle) => {
  const borderStyle: CSSProperties = labelStyle.frame
    ? {}
    : { border: 'none' };
  return labelStyle.rowStyles.map(v => ({...v, ...borderStyle}));
};

const Label = (props: LabelProps) => {
  const labelStyle = makeLabelStyle(props);
  const rowStyles = makeLabelRowStyles(props.style);

  // Note. rowStyles の行数は設定値、content の行数はデータ
  const rows = props.content.map((v, i) => (
    <div className={classes.label__row} style={rowStyles[i]} key={i}>
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
