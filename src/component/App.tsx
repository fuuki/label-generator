/*
refs:
https://qiita.com/cognitom/items/d39d5f19054c8c8fd592
*/

import React, { useState } from 'react';
import Setting from './setting';
import Sheet from './sheet';
import { SheetProps } from '../types/State';
import './App.css';

const sampleLabelContent = [
  'Nippon: Fukuoka-ken',
  'Fukuoka-shi, Nishiku',
  '12 I 2020, Fuuki',
  `33°35'50"N 130°13'26"E`,
  '40m 福岡市 九州大学',
];
const sampleContents = [...Array(100)].map((_) => sampleLabelContent);
const defaultState: SheetProps = {
  contents: sampleContents,
  style: {
    frame: true,
    width: 22,
    align: 'center',
    linesNum: 5,
    fontSize: 6,
  },
};

const App = () => {
  const [state, setState] = useState(defaultState);

  const updateStyle = (v: Object) => {
    const updatedState = {
      ...state,
      style: {
        ...state.style,
        ...v,
      },
    };
    setState(updatedState);
  };

  const updateFile = (v: string[][]) => {
    const updatedState = {
      ...state,
      contents: v,
    };
    setState(updatedState);
  };

  return (
    <div className="App">
      <div className="no_print">
        <a href="https://github.com/fuuki/label-generator">
          使い方はこちら（How to use）
        </a>
        <Setting
          updateStyle={updateStyle}
          updateFile={updateFile}
          state={state}
        />
        <button type="button" onClick={(_) => window.print()}>
          印刷 (Print)
        </button>
      </div>
      <section className="sheet">
        <Sheet contents={state.contents} style={state.style} />
      </section>
    </div>
  );
};

export default App;
