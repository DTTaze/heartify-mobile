export interface Exercise {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
  hash_id: string;
}

export interface RecommendedExerciseReference {
  index: number;
  name: string;
  url: string;
  hash_id: string;
}

export interface ExerciseRecommendationResponse {
  final_plan: string;
  retrieved_exercises: any[];
  search_query: string;
  filter_params: any;
  references: RecommendedExerciseReference[];
}
