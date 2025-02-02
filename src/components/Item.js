import React from 'react';

function Item({ name, category }) {
  return (
    <li>
      <span>{name}</span> - <span>{category}</span>
    </li>
  );
}

export default Item;