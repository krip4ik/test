import React from 'react';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Tooltip placement="topLeft" title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
  );
}

export default App;
