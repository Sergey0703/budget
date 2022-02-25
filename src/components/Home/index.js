import React, {Component} from "react";
//import { BrowserRouter as Router, Switch, Router, Link } from "react-router-dom";
import Balance from '../Balance';
//import Transaction from '../Transaction';
import Transactions from '../Transactions';
import Form from '../Form';

let id=0;
class Home extends Component {
    constructor(){
       super();
       this.state ={
           balance:0,
           transactions:[]
       }
       this.onIncrease=this.onIncrease.bind(this);
       this.onChange=this.onChange.bind(this);
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
    onChange(value){
        console.log('onChangeApp=',value);
        this.setState((state)=>({
                 balance: state.balance+Number(value),
                 transactions: [{
                     value,
                    label: 'change',
                    id: ++id
                },
                 ...state.transactions],
        })

        )
      //debugger
    }

    render(){
        console.log('render');
        return (
         <>
          <Form onChange={this.onChange}/>   
          <button onClick={this.onDecrease}>-</button>   
         <Balance balance={this.state.balance}>Bal</Balance>
         <button onClick={this.onIncrease}>+</button>
         <hr/>
         
         <Transactions transactions={this.state.transactions}/>
        
         </>
        )

        }

}

export default Home;