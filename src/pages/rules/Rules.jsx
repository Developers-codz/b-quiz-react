import React from 'react'
import "./rules.css"

export const Rules = () => {
  return (
    <main>
    <div className="rules-wrapper shadow-box">
        <h1 className="heading">B Quiz Rules</h1>
        <ul>
            <li><i className="fa fa-gavel fa-lg"></i><p className="rules">The quiz contains a total of 5 questions.</p></li>
            <li><i className="fa fa-gavel fa-lg"></i><p className="rules">
Each multiple choice question has only one correct answer.</p></li>
            <li><i className="fa fa-gavel fa-lg"></i>
                <p className="rules">10 marks for every 
                <span className="font2 text-success"> CORRECT ANSWER </span>and 5 negative marks for 
                <span className="font2 text-danger"> WRONG ANSWER</span> .</p>
            </li>
        </ul>
        <a href="./question/question1.html" className="btn-start">Start Quiz</a>
    </div>
</main>
  )
}
