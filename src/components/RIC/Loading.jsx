import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading() {
  return (
    <h1>
      <FontAwesomeIcon icon={faSpinner} style={{ color: '#926AA6' }} className="animate-spin" />
    </h1>
  );
}

export default Loading;
