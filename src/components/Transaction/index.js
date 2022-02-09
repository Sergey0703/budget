const Transaction=(props)=>{
    return(
    <div >
    label: {props.transaction.label}
    value: {props.transaction.value}
    <br/>
    </div>
    )
}



export default Transaction;