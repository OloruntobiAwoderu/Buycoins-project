import React from "react";
import Table from './table';

const TableHeader = ({ results }) => {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor:"#f2f2f2"}}>
          <th><span role="img" aria-label="img">💰 Coin</span></th>
          <th><span role="img" aria-label="img">📄 Code</span></th>
          <th><span role="img" aria-label="img">🤑 Price</span></th>
          <th><span role="img" aria-label="img">📉 Total Supply</span></th>
        </tr>
      </thead>
      <tbody>
      {results.map(result => (
            <Table result={result} key={result.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableHeader;
