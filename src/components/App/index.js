import {Component} from "react";
import Balance from '../Balance';
//import Transaction from '../Transaction';
import Transactions from '../Transactions';
import Form from '../Form';

let id=0;
class App extends Component {
    constructor(){
       super();
       this.state ={
           balance:0,
           transactions:[]
       }
       this.onIncrease=this.onIncrease.bind(this);
      // this.onDecrease=this.onDecrease.bind(this);
      console.log('constructor');
    }
   
    onIncrease() {
      this.setState((state)=>({
          balance:this.state.balance+1,
          transactions: [{
           label: 'incr',
           value: 1,
           id: ++id
          }, ...this.state.transactions]
          }))
      } ;
    

    onDecrease=()=>{
        this.setState((state)=>({
            balance:this.state.balance-1,
            transactions: [{
             label: 'decr',
             value: 1,
             id: ++id
            }, ...this.state.transactions]
            }))
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        // console.log('componentWillUnmount');
        // window.localStorage.setItem('balance',JSON.stringify(this.state.balance));
    }

    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    //     console.log(this.state);
    //     debugger
    //     return false;
    // }

    render(){
        console.log('render');
        return (
         <div>
          <Form/>   
          <button onClick={this.onDecrease}>-</button>   
         <Balance balance={this.state.balance}>Bal</Balance>
         <button onClick={this.onIncrease}>+</button>
         <hr/>
         
         <Transactions transactions={this.state.transactions}/>
        
         </div>
        )

        }

}

export default App;