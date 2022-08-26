//import logo from './logo.svg';
import React from 'react';

import Search from './compo/Search';
import initData from './initData';

function App() {
  return (
    <div className='container'>
      <Search details={initData} />
    </div>
  );
}

export default App;
