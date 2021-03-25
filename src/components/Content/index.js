import React from 'react';
import TableList from '../TableList'

function Content(props){

    return <div>
        <TableList
        result={props.result} 
        sortEmployees = {props.sortEmployees}/>
        {console.log('props',props.result)}
    </div>
}

export default Content;