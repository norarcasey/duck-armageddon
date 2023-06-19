function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export type ProblemDifficulty = 'easy' | 'medium' | 'hard';

export function useMathProblem(difficulty: ProblemDifficulty) {
  const problem = `${getRandomNumber(4, 500)} / ${getRandomNumber(4, 50)}`;

  return {
    answer: Math.round(eval(problem)),
    problem,
  };
}
