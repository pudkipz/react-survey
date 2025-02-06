import { useState } from 'react';
import SurveyForm from './SurveyForm';

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className='survey'>
      <section className={`survey__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className='survey__form'><SurveyForm /></section>
    </main>
  );
}

export default Survey;
