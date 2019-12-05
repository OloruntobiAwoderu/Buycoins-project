import React from "react";
import Table from './table';

const TableHeader = ({ results }) => {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor:"#f2f2f2"}}>
          <th><span>💰 Coin</span></th>
          <th><span>📄 Code</span></th>
          <th><span>🤑 Price</span></th>
          <th><span>📉 Total Supply</span></th>
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
