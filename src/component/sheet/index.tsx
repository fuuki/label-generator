import * as React from 'react';
import Label from './Label';
import classes from './index.module.css';
import { SheetProps } from 'types/State';

const formatContent = (contents: string[][],  linesNum: number) => {
  const formatted = contents.map(content => {
    const v = [...content]
    if (linesNum > v.length) {
      const dif: string[] = Array(linesNum - v.length).fill("　") // 高さ確保のためスペースを埋める
      v.push(...dif)
    } else {
      v.length = linesNum
    }
    return v
  })
  return formatted 
}

const Sheet = (props: SheetProps) => {
  const contents = formatContent(props.contents, props.style.linesNum)
  const labels = contents.map((v, i) => (
    <Label content={v} style={props.style} key={i} />
  ));
  return <div className={classes.sheet}>{labels}</div>;
};

export default Sheet;
