import  React, { Component } from 'react'
import '../../sass/hero.scss'

import { SocialMedia } from '../../elements/socialmedia.js';

const social_media_items = [
  { icon: 'faFacebook', target: '', link: 'test' },
  { icon: 'faTwitter', target: '', link: 'test2' }
];

class Hero extends React.Component {
  render() {
    return(
      <React.Fragment>
      <div id="hero-area" className="v100h">
        <div className="hero-image">
          <img src="https://via.placeholder.com/250x200.jpg?text=Profile Image" />
        </div>
        <div className="hero-name"></div>
        <div className="hero-description"></div>
        <div className="hero-social-media">
          <SocialMedia items={social_media_items} />
        </div>
        <a href="#">Say Hi</a>
      </div>
      </React.Fragment>
    );
  }
}

export default Hero;
