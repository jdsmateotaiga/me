import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { AnchorLink } from './anchorlink.js'

export const SocialMedia = ( {items} ) => {
  return(
     items.map( (item,i) =>
      <li key={i}>
        <a
          href={item.link}
          target={item.target}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </li>
    )
  )
}
