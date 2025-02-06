import { useState } from 'react';
import SurveyForm from './SurveyForm';
import AnswersList from './AnswersList';

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyData, setSurveyData] = useState({
    username: '',
    color: 0,
    spendTime: [],
    review: '',
    email: '',
  })
  const [answersList, setAnswersList] = useState([])

  const onSubmitSurvey = event => {
    event.preventDefault()
    // console.log(surveyData)
    let tempList = answersList
    tempList.push(surveyData)
    setAnswersList(tempList)
    // console.log(answersList)
    setSurveyData({
      username: '',
      color: 0,
      spendTime: [],
      review: '',
      email: '',
    })
  }

  const onChangeSurvey = event => {
    // console.log(surveyData.spendTime)
    switch (event.target.name) {
      case 'color':
        setSurveyData({...surveyData, color: event.target.value})
        break
      case 'spend-time': {
        let spendTime = surveyData.spendTime
        if (spendTime.includes(event.target.value)) {
          spendTime = spendTime.filter(act => act != event.target.value)
        } else {
          spendTime.push(event.target.value)
        }
        setSurveyData({...surveyData, spendTime: spendTime})
        break
      }
      case 'review':
        setSurveyData({...surveyData, review: event.target.value})
        break;
      case 'username':
        setSurveyData({...surveyData, username: event.target.value})
        break
      case 'email':
        setSurveyData({...surveyData, email: event.target.value})
        break
      default:
    }
  }

  return (
    <main className='survey'>
      <section className={`survey__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className='survey__form'>
        <SurveyForm surveyData={surveyData} onSubmit={onSubmitSurvey} onChange={onChangeSurvey} />
        </section>
    </main>
  );
}

export default Survey;
