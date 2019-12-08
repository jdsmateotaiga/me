import React, { Component } from 'react'
import { Drawer } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons'

import '../../sass/sidebar.scss'

import { AnchorLink } from '../../elements/anchorlink.js'

const navigation_data = [
    { title: 'test1', link: '#test1', target: '_self' },
    { title: 'test2', link: '#test2', target: '_self' }
];

class Sidebar extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let navigation_html = navigation_data.map( (data, i) =>
      <li key={i}>
        <AnchorLink
          onClick={this.onClose}
          text={data.title}
          link={data.link}
          target={data.target}
          />
      </li>
    );
    return (
      <React.Fragment>
        <a
          href="#"
          className="drawer-btn open"
          onClick={this.showDrawer}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            <div className="navigation_menu">
              <ul>
              { navigation_html }
              </ul>
            </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default Sidebar;
