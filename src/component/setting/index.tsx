import React from 'react';
import StyleSetting from './StyleSetting';
import { SettingProps } from 'types/State';
import FileReader from './FileReader';

const Setting = (props: SettingProps) => {
  return (
    <div>
      <FileReader onChange={props.updateFile} />
      <StyleSetting onChangeFn={props.updateStyle} state={props.state.style} />
    </div>
  );
};

export default Setting;
