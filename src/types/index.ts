export interface MathContent {
  content: string;
  isMath: boolean;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  theory: Array<string | MathContent>;
  examples: Example[];
  exercises: Exercise[];
  qa: QAPair[];
}

export interface Example {
  question: string;
  solution: string | MathContent;
}

export interface QAPair {
  id: string;
  question: string;
  answer: string;
}

export interface Exercise {
  id: string;
  question: string;
  solution: string;
  type: 'text' | 'numerical' | 'multiple_choice';
  options?: string[];
  hint?: string;
}

export interface UserProgress {
  topicId: string;
  correctAnswers: number;
  totalAttempts: number;
  lastAnswerCorrect: boolean;
}
