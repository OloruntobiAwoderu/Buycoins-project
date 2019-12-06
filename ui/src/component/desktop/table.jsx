import React from "react";

const Table = ({ result }) => {
  return (
    <tr className="desktop">
      <td>{result.name}</td>
      <td>{result.symbol}</td>
      <td>${result.price_usd}</td>
      <td>{result.tsupply}</td>
    </tr>
  );
};

export default Table;
