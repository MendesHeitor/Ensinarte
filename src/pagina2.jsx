import krabbUrl  from './images/—Pngtree—hand-drawn-cute-crab_4265477.png'
import neptuneUrl from './images/kisspng-neptune-planet-uranus-web-browser-neptune-5ae876c4546290.6613918915251841963457.png'
import speakBaloon from './images/balao.png'
import { useState } from "react";
import "./App.css";
import {

  useNavigate,
  
} from "react-router-dom";
const questions = [
  {
    questionText: "What planet is this?", 
    answerOptions: [
      {answerText: 'Neptune', isCorrect: true},
      {answerText: 'Jupyter', isCorrect: false},
      {answerText: 'Venus', isCorrect: false},
      {answerText: 'Mars', isCorrect: false},
    ]
  },
  {
    questionText: "What is a planet?", 
    answerOptions: [
      {answerText: 'A flat surface floating through space', isCorrect: false},
      {answerText: 'A star that does not blink', isCorrect: false},
      {answerText: 'A round celestial corp', isCorrect: true},
      {answerText: 'A large country', isCorrect: false},
    ]
  },
];
const goToFirst = (event) => {
  window.location.reload()
}

const Neptune = (questionNumber, link) => {
  if(questionNumber === 0){
    return <img className="Neptune" src={link}/>
  }
}

function App() {

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const route = useNavigate()

  return (
    <div className="">
      {showScore ? (
        <div className="score-section">
          You've scored {score} of {questions.length} !! 
          <br></br>
          <br></br>
          <button onClick={(event) => {route({pathname: "/"})}} className="retry-button">Retry</button>
        </div>
      ) : (
        <>
          <div className="question-text">
            <div className="questionNumber">
              <b><p className="questionNumber"> Question {currentQuestion + 1}/{questions.length} </p></b>
            </div>

            <div className="question">
                {questions[currentQuestion].questionText}
            </div>
          </div>

            
              
          <div>{Neptune(currentQuestion, neptuneUrl)}</div>
          <img className="krabby" src={krabbUrl}/>
          <img className='speakbaloon' src={speakBaloon}/>

          <div className="buttonsQuestions">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;