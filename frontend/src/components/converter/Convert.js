import React from "react";
import { useParams } from "react-router-dom";

function Convert() {
  const { base } = useParams();

  return <div>Convert for the base {base}</div>;
}

export default Convert;
