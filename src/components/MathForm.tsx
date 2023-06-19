import * as React from 'react';

export function MathForm({ answer }) {
  const [outcome, setOutcome] = React.useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const { userAnswer } = event.target.elements;

        if (userAnswer.value === `${answer}`) {
          setOutcome(`You did it! The answer was ${answer}`);
        } else {
          setOutcome(`You failed! The answer was ${answer}`);
        }
      }}
    >
      <div className="formInputs">
        <input
          name="userAnswer"
          id="userAnswer"
          type="number"
          disabled={!!outcome}
        />
        <button type="submit">submit</button>
      </div>
      <p className="outcome">{outcome}</p>
    </form>
  );
}
