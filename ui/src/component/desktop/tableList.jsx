import React from 'react';


import TableHeader from './tableHeader'

const DesktopTableList = ({ results }) => {
    
    return ( <div className="hide-desktop">
        <TableHeader results={results}  />
        
    </div> );
}
 
export default DesktopTableList;