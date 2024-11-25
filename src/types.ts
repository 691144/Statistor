export interface MathContent {
  content: string;
  isMath: boolean;
}

export interface Example {
  question: string;
  solution: MathContent;
}

export interface BaseExercise {
  id: string;
  question: string;
  explanation: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  options: string[];
  correctAnswerIndex: number;
}

export interface NumericalExercise extends BaseExercise {
  type: 'numerical';
  correctAnswer: string;
  tolerance: number;
}

export type Exercise = MultipleChoiceExercise | NumericalExercise;

export interface QA {
  id: string;
  question: string;
  answer: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  theory: (string | MathContent)[];
  examples: Example[];
  exercises: Exercise[];
  qa: QA[];
}
