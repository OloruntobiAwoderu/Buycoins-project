import React from 'react';


import TableHeader from './tableHeader'

const TableList = ({ results }) => {
    
    return ( <div className="hide-desktop">
        <TableHeader results={results}  />
        
    </div> );
}
 
export default TableList;