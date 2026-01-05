
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  score: {
    role: 'content' | 'copy';
    level: 'specialist' | 'strategist';
  };
}

export interface AssessmentResult {
  role: 'Content Writer' | 'Copywriter';
  level: 'Specialist' | 'Strategist';
  description: string;
  advice: string;
}
