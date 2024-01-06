import { useState } from 'react';
import styles from './App.module.css';
import ButtonsContainer from './ButtonsContainer';
import Display from './Display';


function App(){
  let [calVal,setCalVal]=useState("100");

  const onButtonClick=(buttonName)=>{
    if(buttonName==='C'){
      setCalVal("")
    }
    else if(buttonName==='='){
      let newVal=eval(calVal)
      setCalVal(newVal);
    }
    else{
      let newVal=calVal+buttonName;
      setCalVal(newVal);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;