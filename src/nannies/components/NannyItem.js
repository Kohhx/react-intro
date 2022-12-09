import React from "react";

import './NannyItem.css'

const NannyItem = (props) => {
  return (
    <li>
      <div>{props.item.id}</div>
      <div>{props.item.name}</div>
    </li>
  );
};

export default NannyItem;
