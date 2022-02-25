import { Component } from "react";

class Form extends Component {
    constructor(){
        super();
        this.state={
            value:0
        }
    }
    onSubmit=(e)=>{
      e.preventDefault();
      this.props.onChange(this.state.value);
      console.log(this.state, ' props= ' ,this.props);
    }
    
    onChange=(e)=>{
       const value=e.target.value;
       this.setState({
           value
       })
    }
    render(){
        return(
        <form onSubmit={this.onSubmit}>
            <input name="balance" type="number" placeholder="Summa" value={this.state.value} onChange={this.onChange}></input>
            <button>Save</button>
        </form>
        )
    }
}

export default Form;