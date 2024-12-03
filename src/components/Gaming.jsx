import React, { useState } from 'react'

const Gaming = () => {

    const options = ["rock" , "paper" , "scissor"];
    const [playerChoice , setPlayerChoice] = useState("");
    const [opponentChoice , setOpponentChoice] = useState("");
    const [result , setResult] = useState("");
    const [isDisabled , setIsDisabled] = useState(false);

    function handleClick(choosedOption){
        setIsDisabled(prev => !prev);
        const opponentChoice = computerChoice();
        setPlayerChoice(choosedOption);
        setOpponentChoice(opponentChoice);
        announceWinner(choosedOption , opponentChoice );
        restartGame();
    }

    function computerChoice(){
        const getRandomNumber = Math.floor(Math.random() * 3);
        return options[getRandomNumber]
    }

    function announceWinner(player,opponent){
        if(player === opponent){
            setResult("It is a tie!");
        } else if( (player === "rock" && opponent === "scissor") || 
            ( player === "paper" && opponent === "rock" ) || 
            ( player === "scissor" && opponent === "paper" ) ){
                setResult("You Win!");   
        } else {
            setResult("You Lose!"); 
        }
    }

    function restartGame(){
        setTimeout(() => {
            setResult("");
            setIsDisabled(prev => !prev);
        },3000)
    }


  return (
    <>
     <div id="game-screen">
     <h1>Welcome to ROCK-PAPER-SCISSOR</h1>
     <h1>Have Some Fun</h1>
        <div id="play-area">
            <div>
        <div id="btn-group">
            <p style={{color:"white"}}>Make Your Choice. Good Luck!</p>
            {
                options.map((option) => {
                    return <button key={option} className='btn' onClick={() =>handleClick(option)} disabled={isDisabled} >
                        {option.toUpperCase()}
                    </button>
                })
            }
        </div>

        <div id="result-section">
            { result && (
                <div>
                    <p>You Chose : {playerChoice} </p> <br/>
                    <p>Opponent Chose : {opponentChoice} </p> <br/>
                    <p className="result" style={result.split(' ').includes('Win!') ? {color:"green"} : {color:"red"}}> {result} </p>
                </div>
            )
            }
        </div>
        </div>

        <div id="game-guide">
            <h2>Gaming Guide</h2> <br/>
            <p>Rock vs Rock -       Tie</p> <br/>
            <p>Rock vs Paper -      Lose</p> <br/>
            <p>Rock vs Scissor -    Win</p> <br/>
            <hr/> <br/>
            <p>Paper vs Paper -     Tie</p> <br/>
            <p>Paper vs Rock -      Win</p> <br/>
            <p>Paper vs Scissor -   Lose</p> <br/>
            <hr/> <br/>
            <p>Scissor vs Scissor - Tie</p> <br/>
            <p>Scissor vs Rock -    Lose</p> <br/>
            <p>Scissor vs Paper -   Win</p> <br/>
        </div>
        </div>

     </div>
    </>
  )
}

export default Gaming