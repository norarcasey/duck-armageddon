function getRandomNumber(range: number[]): number {
  const [min, max] = range;
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator(difficulty: ProblemDifficulty = 'hard') {
  const operators = ['/', '*', '-', '+'];

  const endRange = difficulty === 'hard' ? 2 : 4;
  const index = getRandomNumber([0, endRange]);

  return operators[index];
}

export type ProblemDifficulty = 'easy' | 'medium' | 'hard';

export function useMathProblem(difficulty: ProblemDifficulty) {
  const range: number[] = [];

  switch (difficulty) {
    case 'easy':
      range.push(0);
      range.push(10);
      break;

    case 'medium':
      range.push(1);
      range.push(100);
      break;

    case 'hard':
      range.push(4);
      range.push(500);
      break;
  }

  // The problem is that rounding is killing the difficulty for division
  // get the operator first

  const operator = getRandomOperator();
  const isDivision = operator === '/';
  const leftSideNumber = isDivision
    ? getRandomNumber([350, 700])
    : getRandomNumber(range);
  const rightSideNumber = isDivision
    ? getRandomNumber([7, 23])
    : getRandomNumber(range);

  const problem = `${leftSideNumber} ${operator} ${rightSideNumber}`;

  // NOTE: eval can be very risky to use,
  // but this is just a silly math game.
  const answer = Math.round(eval(problem));

  return {
    answer,
    problem,
  };
}
