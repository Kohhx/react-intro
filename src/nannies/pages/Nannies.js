import React from "react";
import { v4 as uuidv4 } from "uuid";

import NanniesList from "../components/NanniesList";
import './Nannies.css'

const Nannies = () => {
  const dummyNanny = [
    { id: uuidv4(), name: "koh" },
    { id: uuidv4(), name: "ky" },
    { id: uuidv4(), name: "zy" },
  ];

  return (
    <div>
      <NanniesList items={dummyNanny} />
    </div>
  );
};

export default Nannies;
