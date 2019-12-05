import React, { Component } from 'react';
import { AnchorLink } from './anchorlink.js';

const navigation_data = [
    { title: 'test1', link: '#test1', target: '_self' },
    { title: 'test2', link: '#test2', target: '_self' }
];

class Sidebar extends Component {
  render() {
    let navigation_html = navigation_data.map(data =>
      <div><AnchorLink text={data.title} link={data.link} target={data.target} /></div>
    );
    return (
      <div class="navigation_menu">
        { navigation_html }
      </div>
    );
  }
}

export default Sidebar;
