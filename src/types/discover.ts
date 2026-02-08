export interface Ingredient {
  food: string;
  text: string;
  weight: number;
  measure: string;
  quantity: number;
}

export interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

export interface DailyValue {
  label: string;
  quantity: number;
  unit: string;
}

export interface DigestItem {
  tag: string;
  label: string;
  unit: string;
  total: number;
  daily: number;
  hasRDI: boolean;
  schemaOrgTag: string | null;
  sub?: DigestSubItem[];
}

export interface DigestSubItem {
  tag: string;
  label: string;
  unit: string;
  total: number;
  daily: number;
  hasRDI: boolean;
  schemaOrgTag: string | null;
}

export interface Recipe {
  createdAt: string;
  updatedAt: string;
  hashId: string;

  recipeName: string;
  source: string;
  url: string;
  imageUrl: string;

  servings: number;
  calories: number;
  totalWeightG: number;

  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];

  cuisineType: string[];
  mealType: string[];
  dishType: string[];

  ingredientLines: string[];
  ingredients: Ingredient[];

  totalNutrients: Record<string, Nutrient>;
  dailyValues: Record<string, DailyValue>;
  digest: DigestItem[];
}
