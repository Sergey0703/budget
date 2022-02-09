
const Balance=({balance,children})=>{
   return <div>{balance===0?'Nul':balance>0?'Plus':'Minus' }</div>
}

export default Balance;


