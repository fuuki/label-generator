/*
refs:
https://qiita.com/cognitom/items/d39d5f19054c8c8fd592
*/

import React from 'react';
import Setting from 'feature/component/setting';
import Sheet from 'feature/component/sheet';
import './App.css';
import { store } from 'app/store'
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="no_print">
          <a href="https://github.com/fuuki/label-generator">
            使い方はこちら（How to use）
        </a>
          <Setting />
          <button type="button" onClick={(_) => window.print()}>
            印刷 (Print)
        </button>
        </div>
        <section className="sheet">
          <Sheet />
        </section>
      </Provider>
    </div>
  );
};

export default App;
