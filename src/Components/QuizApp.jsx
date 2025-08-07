import React, { useRef } from "react";
import "./Quiz.css";
import { useState } from "react";
import { data } from "../assets/data";

const QuizApp = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);

  const [lock, setLock] = useState(false);

  const [score, setScore] = useState(0);

  const [result, setResult] = useState(false); 

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e,ans) => {
    if (lock === false) {
      if(questions.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1);
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[questions.ans - 1].current.classList.add("correct");
      }
    }
  }
  const next = () => { 
    if (lock === true) {
      if(index=== data.length - 1) {
        setResult(true);
        return 0;
      }
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        
      });
      if (index < data.length - 1) {
        setIndex(prev => prev + 1);
        setQuestions(data[index + 1]);
      } 
      else {
        // alert(`Quiz Over! Your score is ${score}/${data.length}`);
        setIndex(0);
        setQuestions(data[0]);
        setScore(0);   
      }
    } else {
      alert("Please select an answer first!");
    }
  }
  const Reset = () => {
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }
  return (
    <div className="container">
      <h1 className="text-3xl font-bold pt-4">Quiz App</h1>
      <hr />
      {result ?<></> :<>
      <h2>
        {index+1}.{questions.question}
      </h2>
      <ul>
        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{questions.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{questions.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{questions.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{questions.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index+1} of {data.length} questions</div>
      </>}
      {result?<><h2>You Scored {score} out of {data.length}</h2>
       <button onClick={Reset}>Reset</button></> : <></>}
    </div>
  );
};

export default QuizApp;
