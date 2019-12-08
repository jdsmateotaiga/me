import React from 'react';

export const AnchorLink = ( {text, link, target, onClick} ) => {
  return (
    <a
      href={ (link) ? link : '#' }
      target={ target }
      onClick={ onClick }>{ text }
    </a>
  );
}
