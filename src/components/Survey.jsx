import { useState } from 'react';
import SurveyForm from './SurveyForm';

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyData, setSurveyData] = useState({
    username: '',
    color: 0,
    spendTime: [],
    review: '',
    email: '',
  })

  const onSubmitSurvey = event => {
    event.preventDefault()
    console.log(surveyData)
  }

  const onChangeSurvey = event => {
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
        {/* answers should go here */}
      </section>
      <section className='survey__form'>
        <SurveyForm surveyData={surveyData} onSubmit={onSubmitSurvey} onChange={onChangeSurvey} />
        </section>
    </main>
  );
}

export default Survey;
