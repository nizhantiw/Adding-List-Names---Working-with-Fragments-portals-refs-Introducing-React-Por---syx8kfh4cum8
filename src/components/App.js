import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  const[val setValue] = useState("");
  const[list setList] = useState([]);
  const changehandler = (event) => {
    setValue(event.target.value);
  }
  const addhandler = () => {
    setList({...list, val]);
  }
  //code here
  return (
    <div id="main">
       <input id="input" onChange={} />
      <button id="button" onClick={}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
