import * as React from 'react';

export function MathForm({ answer }) {
  const [outcome, setOutcome] = React.useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const { userAnswer } = event.target.elements;
        console.log(userAnswer.value);

        if (userAnswer.value === `${answer}`) {
          console.log(`You did it! The answer was ${answer}`);
          setOutcome(`You did it! The answer was ${answer}`);
        } else {
          console.log(`You failed! The answer was ${answer}`);
          setOutcome(`You failed! The answer was ${answer}`);
        }
      }}
    >
      <div className="formInputs">
        {/* Restrict the input to numbers for math */}
        <input name="userAnswer" id="userAnswer" type="number" />
        <button type="submit">submit</button>
      </div>
      <p className="outcome">{outcome}</p>
    </form>
  );
}
