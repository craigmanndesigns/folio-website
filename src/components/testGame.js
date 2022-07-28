import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const TestGame = () => {

function increment(x){
  return x + 1;
}
function decrement(x){
  return x - 1;  
}
const actionXMap = {
   ArrowLeft: decrement,
   ArrowRight: increment
}
const actionYMap = {
   ArrowDown: increment,
   ArrowUp: decrement
}
function Board({}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  function handleKeyPress(e){
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
  }
  
  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[])
  
  return (
    <div id="app"  onKeyPress={handleKeyPress}>
        <div className="character" style={{left: x+'rem'}} ></div>
    </div>
  )
}
 return (
    <div className="board">
        <Board />
    </div>
 )
}
 
export default TestGame