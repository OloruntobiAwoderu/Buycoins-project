import React from "react";
import Table from './table';

const TableHeader = ({ results }) => {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor:"#f2f2f2"}}>
          <th>💰 Coin</th>
          <th>📄 Code</th>
          <th>🤑 Price</th>
          <th>📉 Total Supply</th>
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
