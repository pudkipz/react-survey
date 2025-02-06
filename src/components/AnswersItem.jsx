// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: 'Swimming',
  bathing: 'Bathing',
  chatting: 'Chatting',
  noTime: `I don't like to spend time with it`,
  email: 'rubber@ducks.com',
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// const onEditButtonClick = index => console.log(index)

// This is the main component being exported from this file
export default function AnswersItem({
  answerItem: {username, color, spendTime, review, index}, onEditButtonClick}) {
  return (
    <li>
      <article className='answer'>
        <h3>{username || 'Anon'} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className='answer__line'>{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className='answer__line'>{review}</span>
        </p>
        <input type='button' value='Edit answers' onClick={() => onEditButtonClick(index)} />
      </article>
    </li>
  );
}
