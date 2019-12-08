import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons'

export const SocialMedia = ( {items} ) => {
  return(
     items.map( (item,i) =>
      <li key={i}>
        <FontAwesomeIcon icon={faBars} />
      </li>
    )
  )
}
