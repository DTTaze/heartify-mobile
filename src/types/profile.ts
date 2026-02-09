export interface User {
  createdAt: string;
  updatedAt: string;
  id: string;
  status: ENTITY_STATUS;
  email: string;
  username: string;
  password: string;
  metadata: any | null;
  profile: UserProfile;
}

export interface UserProfile {
  createdAt: string;
  updatedAt: string;
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  latestMeasurements: LatestMeasurements;
  country: string;
  isSmoker: boolean;
  isDiabetic: boolean;
  isTreatedHypertension: boolean;
  allergies: OptionWithDetails;
  medications: OptionWithDetails;
  physicalLimitations: OptionWithDetails;
  goals: string[];
  exerciseRoutines: ExerciseRoutine[];
}

export interface LatestMeasurements {
  bmi: number;
  height: Measurement;
  weight: Measurement;
}

export interface Measurement {
  unit: WEIGHT_UNIT | HEIGHT_UNIT;
  value: number;
}

export interface OptionWithDetails {
  details: string;
  options: string[];
}

export interface ExerciseRoutine {
  frequency: EXERCISES_FREQUENCY;
  intensity: EXERCISES_INTENSITY;
  exercisesGroup: EXERCISES_GROUP;
}

export enum ENTITY_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum WEIGHT_UNIT {
  KG = 'kg',
  LB = 'lb',
}

export enum HEIGHT_UNIT {
  CM = 'cm',
  IN = 'in',
}

export enum EXERCISES_GROUP {
  CARDIO = 'cardio',
  LIGHT_RECOVERY = 'light_recovery',
  FLEXIBILITY = 'flexibility',
  STRENGTH = 'strength',
  SPORTS = 'sports',
  MIXED = 'mixed',
}

export enum EXERCISES_INTENSITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum EXERCISES_FREQUENCY {
  OCCASIONAL = 'occasional',
  REGULAR = 'regular',
  ACTIVE = 'active',
  VERY_ACTIVE = 'very_active',
}
