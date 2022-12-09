import React from "react";

import NannyItem from "./NannyItem";
import './NanniesList.css'

const NanniesList = (props) => {
  console.log(props.items[0].id);

  if (props.items.length === 0) {
    return (
      <div>
        <h2>No Nanny</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((item) => (
        <NannyItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default NanniesList;
