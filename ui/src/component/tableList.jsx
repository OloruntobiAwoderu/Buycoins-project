import React, { Component } from 'react';

import TableHeader from './tableHeader.jsx'

const TableList = ({ results }) => {
    
    return ( <div>
        <TableHeader results={results}  />
        
    </div> );
}
 
export default TableList;