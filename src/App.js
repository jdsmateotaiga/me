import React from 'react'
import 'antd/dist/antd.css'
import './sass/common.scss'
import Sidebar   from './components/sidebar'
import Hero      from './components/hero'

function App() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <Hero></Hero>
    </React.Fragment>
  );
}

export default App;
