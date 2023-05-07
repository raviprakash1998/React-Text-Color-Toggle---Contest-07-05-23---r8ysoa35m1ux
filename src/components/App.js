import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  const [changeColor, setChangeColor] = useState(false);
  
  const OnClickBtn = () => {
    setChangeColor(!changeColor)
  }
  
  return (
    <div id="main">
      <p className={`${(changeColor === true)? 'blueColor':'redColor'}`} >Newton School</p>
      <button id='button' onClick={OnClickBtn}>Change Style</button>
    </div>
  )
}


export default App;
