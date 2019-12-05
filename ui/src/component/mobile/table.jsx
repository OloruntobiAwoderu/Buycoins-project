import React from "react";
const Table = ({ result }) => {
  return (
    <thead>
      <tr>
        <th>
          <span role="img" aria-label="img">
            💰 Coin
          </span>
        </th>
        <th>
          <span role="img" aria-label="img">
            📄 Code
          </span>
        </th>
      </tr>
      <tr>
        <td>{result.name}</td>
        <td>{result.symbol}</td>
      </tr>
      <tr>
        <th>
          <span role="img" aria-label="img">
            🤑 Price
          </span>
        </th>
        <th>
          <span role="img" aria-label="img">
            📉 Total Supply
          </span>
        </th>
      </tr>
      <tr>
        <td>${result.price_usd}</td>
        <td>{result.tsupply}</td>
      </tr>
    </thead>
  );
};

export default Table;
