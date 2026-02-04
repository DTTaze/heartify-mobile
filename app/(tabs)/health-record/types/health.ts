export type HealthRiskLevel = 'low' | 'borderline' | 'moderate' | 'high';

export interface HealthRecord {
  id: string;
  date: string;
  bmi: string;
  heartRate: string;
  bloodPressure: string;
  location: string;
  risk: HealthRiskLevel;
}
