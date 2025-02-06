import AnswersItem from './AnswersItem';

export default function AnswersList({answersList, onEditButtonClick}) {
  // console.log('Inside AnswersList: ', answers);
  // const answersList = [answers]

  // const answersList = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} onEditButtonClick={onEditButtonClick} />
      ))}
    </ul>
  );
}
