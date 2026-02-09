export interface User {
  id: string;
  hasPassword: boolean;
}

export interface UserInfoResponse {
  data: User;
  success: boolean;
}

export interface Measurement {
  value: number;
  unit: string;
}

export interface LatestMeasurements {
  weight: Measurement;
  height: Measurement;
  bmi: number;
}

export interface MedicalInfo {
  options: string[];
  details: string;
}

export interface ExerciseRoutine {
  exercisesGroup: EXERCISES_GROUP;
  frequency: EXERCISES_FREQUENCY;
  intensity: EXERCISES_INTENSITY;
}

export interface UserProfileRequest {
  firstName: string;
  lastName: string;
  isSmoker: boolean;
  isDiabetic: boolean;
  isTreatedHypertension: boolean;
  dateOfBirth: string;
  gender: Gender;
  country: string;
  latestMeasurements: LatestMeasurements;
  allergies: MedicalInfo;
  medications: MedicalInfo;
  physicalLimitations: MedicalInfo;
  goals: string[];
  exerciseRoutines: ExerciseRoutine[];
}

export interface Metadata {
  [key: string]: any;
}
export interface Measurements {
  [key: string]: any;
}

// --- Thành phần chính ---

export interface HealthRecord {
  id: string;
  user: string;
  userId: string;
  recordedAt: string; // ISO Date
  healthRecordName: string;
  ageAtRecord: number;
  systolicBp: number;
  diastolicBp: number;
  totalCholesterol: number;
  hdlCholesterol: number;
  measurements: Measurements;
  riskLevel: RiskLevel;
  riskScore: number;
  riskPercentage: number;
  riskAlgorithm: string;
  identifiedRiskFactors: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface UserAccount {
  id: string;
  status: ENTITY_STATUS;
  email: string;
  username: string;
  password?: string; // Thường pass sẽ được ẩn ở frontend
  metadata: Metadata;
  profile: string; // ID hoặc Link profile
  healthRecords: HealthRecord[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface UserProfileData {
  id: string;
  userId: string;
  user: UserAccount;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  latestMeasurements: Measurements;
  country: string;
  isSmoker: boolean;
  isDiabetic: boolean;
  isTreatedHypertension: boolean;
  allergies: Metadata;
  medications: Metadata;
  physicalLimitations: Metadata;
  goals: string[];
  exerciseRoutines: ExerciseRoutine[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// --- Interface Response chính ---
export interface UserProfileResponse {
  success: boolean;
  data: UserProfileData;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
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

export enum EXERCISES_GROUP {
  CARDIO = 'cardio',
  LIGHT_RECOVERY = 'light_recovery',
  FLEXIBILITY = 'flexibility',
  STRENGTH = 'strength',
  SPORTS = 'sports',
  MIXED = 'mixed',
}

export enum ENTITY_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
}

export enum RiskLevel {
  LOW = 'low',
  BORDERLINE = 'borderline',
  MODERATE = 'moderate',
  HIGH = 'high',
  HIGH_LIFETIME = 'high_lifetime',
  LOW_LIFETIME = 'low_lifetime',
}
