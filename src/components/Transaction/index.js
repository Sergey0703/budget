//import './style.css';
import {Wrapper} from './styles.js';

const Transaction=({transaction})=>{
    return(
    <Wrapper value={transaction.value}>
    label: {transaction.label}
    value: {transaction.value}
    <br/>
    </Wrapper>
    )
}



export default Transaction;