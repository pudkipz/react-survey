import Checkboxes from './Checkboxes';
import Radiobuttons from './Radiobuttons';



export default function SurveyForm({surveyData, onSubmit, onChange}) {
  return (
    <form className='form' onSubmit={onSubmit} onChange={onChange}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck colour?</h3>
        <Radiobuttons selected={surveyData.color} />
      </div>
      <div className='form__group'>
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes selected={surveyData.spendTime} />
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name='review'
          cols='30'
          rows='10'
          value={surveyData.review}
        ></textarea></label
      ><label
        >Put your name here (if you feel like it):<input
          type='text'
          name='username'
          value={surveyData.username} /></label
      ><label
        >Leave us your email pretty please??<input
          type='email'
          name='email'
          value={surveyData.email} /></label
      ><input className='form__submit' type='submit' value='Submit Survey!' />
    </form>
  )
}