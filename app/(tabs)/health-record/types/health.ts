export type HealthRiskLevel = 'low' | 'borderline' | 'moderate' | 'high';

export interface HealthRecord {
  id: string;
  healthRecordName: string;
  medicalFacilityName: string;
  date: string; // recordedAt
  riskPercentage: string;
  bloodPressure: string; // ví dụ: "145/92"
  risk: HealthRiskLevel;

  createdAt: string;
  updatedAt: string;
  userId: string;
  recordedAt: string;

  ageAtRecord: number;

  systolicBp: number;
  diastolicBp: number;

  totalCholesterol: string;
  hdlCholesterol: string;

  isSmoker: boolean;
  isDiabetic: boolean;
  isTreatedHypertension: boolean;

  measurements: {
    bmi: number;
    height: {
      unit: string;
      value: number;
    };
    weight: {
      unit: string;
      value: number;
    };
  };

  riskLevel: HealthRiskLevel | string;
  riskScore: string;
  riskAlgorithm: string;

  identifiedRiskFactors: string[];
}

export interface RiskLevel {
  min: number;
  max: number;
  label: string;
  feeling: string;
  heartColor: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
}
