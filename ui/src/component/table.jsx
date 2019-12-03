import React from "react";

const Table = ({ result }) => {
  return (
    <tr>
      <th>{result.name}</th>
      <th>{result.symbol}</th>
      <th>${result.price_usd}</th>
      <th>{result.tsupply}</th>
    </tr>
  );
};

export default Table;
