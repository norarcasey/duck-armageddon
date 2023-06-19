function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator() {
  const operators = ['/', '*', '-', '+'];
  const index = getRandomNumber(0, 3);

  return operators[index];
}

export type ProblemDifficulty = 'easy' | 'medium' | 'hard';

export function useMathProblem(difficulty: ProblemDifficulty) {
  const problem = `${getRandomNumber(
    4,
    500
  )} ${getRandomOperator()} ${getRandomNumber(4, 50)}`;

  // NOTE: eval can be very risky to use,
  // but this is just a silly math game.
  const answer = Math.round(eval(problem));

  return {
    answer,
    problem,
  };
}
