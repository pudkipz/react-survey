import { useState } from 'react';

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className='survey'>
      <section className={`survey__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className='survey__form'>{/* a form should be here */}</section>
    </main>
  );
}

export default Survey;
