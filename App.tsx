import * as React from 'react';
import './style.css';
import Hello from './helo'
import {BrowserRouter,Route, Routes} from 'react-router-dom';

const Home=()=>{
  return <div> home </div>;
}

  const re=()=>{
    return <div> re </div>;
  }

    const te=()=>{
      return <div> te </div>;
    }

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
     <div >welcome
      <Routes>
       <Route path="/" component={Home}/>
       <Route exact path="/test" component={te}/>
       
     </Routes>
     </div>
        </BrowserRouter>
    )
  }
}
export default App;
