import { createContext, useContext, useState, ReactNode } from 'react';
import { Gender, ExerciseRoutine } from '@/src/types/user';

interface SignUpData {
  email?: string; // For auto-login
  password?: string; // For auto-login
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: Gender;
  weightVal?: string;
  weightUnit?: 'kg' | 'lb';
  heightVal?: string;
  heightUnit?: 'cm' | 'ft';
  isSmoker?: boolean;
  isDiabetic?: boolean;
  isTreatedHypertension?: boolean;
  allergies?: {
    options: string[];
    details: string;
  };
  medications?: {
    options: string[];
    details: string;
  };
  physicalLimitations?: {
    options: string[];
    details: string;
  };
  intensityLevel?: number; // 0, 1, 2
  frequencyId?: string;
  selectedGoals?: string[];
  selectedSports?: string[];
  country?: string;
  goals: string[];
  exerciseRoutines: ExerciseRoutine[];
}

interface SignUpContextType {
  data: SignUpData;
  updateData: (newData: Partial<SignUpData>) => void;
  isLoading: boolean;
}

export const SignUpContext = createContext<SignUpContextType | undefined>(
  undefined,
);

export function SignUpProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SignUpData>({
    country: 'VN', // Default or detected
    goals: [],
    exerciseRoutines: [],
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const updateData = (newData: Partial<SignUpData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <SignUpContext.Provider value={{ data, updateData, isLoading }}>
      {children}
    </SignUpContext.Provider>
  );
}

export function useSignUp() {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUp must be used within a SignUpProvider');
  }
  return context;
}
