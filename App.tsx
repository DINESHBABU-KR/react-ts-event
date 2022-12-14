import * as React from 'react';
import './style.css';
import Hello from './helo'
class App extends React.Component{
constructor(){
  super();
this.state={
  name:'dina',
  value:null
};
}
 
  onClick=()=>{
    const name=this.state.name==='dina'?"react":"dina";
    this.setState({name,value:'test'})
  }
  value=(event)=>{

    this.setState({value:event.target.value});
  }
  render(){
    return(
      <div>
        <Hello name={this.state.name}/>
        <input type="text" value={this.state.value} onChange={this.value.bind(this)}/>
        <button onClick={this.onClick}>clickme</button>
        {this.state.value}

        </div>
    )
  }
}
export default App;
