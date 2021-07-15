import React from 'react';
import {MdSend} from 'react-icons/md'
const Expspensesform = ({charge,amount,handlecharge,handleamount,handlesubmit,edit}) => {
    return <form onSubmit={handlesubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input type="text" className="form-control" id="charge" name="charge" placeholder="e.g. rent" value={charge} onChange={handlecharge}></input>
            </div>
            <div className="form-group">
                <label htmlFor="amout">amount</label>
                <input type="number" className="form-control" id="amount" name="amount" placeholder="e.g. 100" value={amount} onChange={handleamount}></input>
            </div>
        </div>
        <button type="submit" className="btn">{edit.show?'edit':'submit'}<MdSend className="btn-icon"></MdSend></button>
    </form>;
}


export default Expspensesform;