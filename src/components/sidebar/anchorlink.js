import React from 'react';

export const AnchorLink = ({text, link, target}) => {
  return <a href={ (link) ? link : '#' } target={ target }>{ text }</a>
}
