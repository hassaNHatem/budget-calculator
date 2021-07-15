import React from 'react';
import Item from './Expspenseitem'
import {MdDelete} from 'react-icons/md'
const Expsenselist = ({expenses,clear,handleedit,handledelete}) => {
    return <>
        <ul className="list">
            {expenses.map((expense,key)=>{
               return <Item key={expense.id} expense={expense} handleedit={handleedit} handledelete={handledelete}></Item>                
            })}
        </ul>
        {expenses.length > 0 && <button onClick={clear} className="btn" >
            clear
            <MdDelete   className="btn-icon"></MdDelete>
            </button>}
    </>;
}



export default Expsenselist;