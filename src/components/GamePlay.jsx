import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import RoleDice from "./RoleDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [score,setScore] = useState(0);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min , max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev)=> randomNumber);
    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2 );
    }

    setSelectedNumber(undefined);

  };

  const reset = ()=>{
    setScore(0);
    setCurrentDice(1);
  }



  return (

    <MainConatiner>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector 
        setError={setError}
        error = {error}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}  
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <OutlineButton onClick={reset}>Reset</OutlineButton>
        <Button
        onClick={()=> setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>

     {showRules && <Rules/>}

    </MainConatiner>
  )
}

export default GamePlay

const MainConatiner = styled.main`

    padding-top: 70px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 40px;
    }
`;