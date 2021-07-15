import "./App.css"
import List from './components/Expsenselist'
import From from './components/Expspensesform'
import Alert from './components/Alert';
import uuid from 'uuid/dist/v4'
import {react,useState,useEffect} from 'react'


/*const initialexpense   = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"car payment",amount:400},
  {id:uuid(),charge:"credit card pill",amount:1200}
]*/

const initialexpense = localStorage.getItem('expenses')?JSON.parse(localStorage.getItem('expenses')):[]
function App() {
  //all expenses
const [expenses,setexpenses] = useState(initialexpense)
  //single expense
const [charge,setcharge] = useState('');
  //single AMOUNT
const [amount,setamount] = useState('');
  //alret
const [Alret,setAlret] = useState({show:false});
//edit
const[edit,setedit] = useState({show:false})
//edit item
const[id,setid]= useState(0)

/*******************useEffect */
useEffect(()=>{
  localStorage.setItem('expenses',JSON.stringify(expenses))
},[expenses])
/***************************functionality */
const handlecharge = e=>{
  setcharge(e.target.value)
}

const handleamount = e=>{
  setamount(e.target.value)
}

const handlesubmit = e =>{
  e.preventDefault()
  if(charge !=='' && amount>0){
    if(edit.show){
      let temp = expenses.map(item=>{return item.id===id?{...item,charge:charge,amount:amount}:item})
      setexpenses(temp)
      setedit(false)
      
    }else{
  const expense = {id:uuid(),charge:charge,amount:amount}
  const newarr = [...expenses,expense]
  setexpenses(newarr)
  handleAlert({type:'success',text:'item added'})
}
  setcharge('')
  setamount('')
 
  }else{
    //handle alret call
    handleAlert({type:'danger',text:`charge can't be empty value and amount value has to be bigger than zero`})
  }
}

const handleAlert = ({type,text})=>{
  setAlret({show:true,type:type,text:text})
  setTimeout(() => {
    setAlret({show:false})
  }, 3000);
}

const clearitems = ()=>{
  setexpenses([])
  handleAlert({type:'success',text:'list cleared'})
}

const handledelete = (id)=>{
const newarr = expenses.filter(expense=>{return expense.id!==id})
setexpenses(newarr)
handleAlert({type:'success',text:'item deleted'})
}

const handleedit = (id)=>{
  let expense = expenses.find(item=>{return item.id===id})
  let {charge,amount} = expense;
  setcharge(charge)
  setamount(amount)
  setedit({show:true})
  setid(id)
}


  return (
    <>
    {Alret.show && <Alert type={Alret.type} text={Alret.text}></Alert>}
     <h1>budget calculator</h1>
     <main className="App">
     <From edit={edit} charge={charge} amount={amount} handleamount={handleamount} handlecharge={handlecharge} handlesubmit={handlesubmit}></From>
     <List expenses={expenses} clear={clearitems} handleedit={handleedit} handledelete={handledelete}></List>
     </main>
     <h1>Total spending:<span className="total"> ${expenses.reduce((acc,curr)=>{
       return acc+=parseInt (curr.amount)
     },0)}</span></h1>
   
    </>
  );
}

export default App;
