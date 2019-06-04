import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeleteButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="btn btn-danger"
    >
      {props.children} <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
