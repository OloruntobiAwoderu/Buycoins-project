import React from "react";
import Table from "./table";

const TableLiist = ({ results }) => {
  return (
    <table>
      {results.map(result => (
        <Table result={result} key={result.id} />
      ))}
    </table>
  );
};

export default TableLiist;
