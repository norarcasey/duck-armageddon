import * as React from 'react';

import { MathForm } from './components/MathForm';
import { Problem } from './components/Problem';
import { useMathProblem } from './hooks/useMathProblem';

import './style.css';

export default function App() {
  const { answer, problem } = useMathProblem('hard');
  /**
   * What does this app do?
   *
   * It is a game with a duck with deadly consequences.
   *
   * The goal is to answer the math questions before time runs out...
   * otherwise kaboom!
   *
   * Timed
   * Math, Geography (where is this!?!), Biology
   *
   * His wife is the president, who's also a duck!
   *
   * What are the demensions of my house!
   */

  return (
    <div className="game">
      <div className="form">
        <Problem problem={problem} />
        <MathForm answer={answer} />
      </div>
    </div>
  );
}
