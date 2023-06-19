function getRandomNumber(range: number[]): number {
  const [min, max] = range;
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator() {
  const operators = ['/', '*', '-', '+'];
  const index = getRandomNumber([0, 3]);

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

  const problem = `${getRandomNumber(
    range
  )} ${getRandomOperator()} ${getRandomNumber(range)}`;

  // NOTE: eval can be very risky to use,
  // but this is just a silly math game.
  const answer = Math.round(eval(problem));

  return {
    answer,
    problem,
  };
}
