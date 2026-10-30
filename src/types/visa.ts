export type VisaCategoryCode = 'C-3-9' | 'D-2' | 'C-3-4';

export interface VisaCategory {
  id: string;
  code: VisaCategoryCode;
  name: string;
  shortDesc: string;
  targetAudience: string;
  duration: string;
  processingTime: string;
  passRate: string;
  baseFee: string;
  highlights: string[];
  requiredDocs: {
    category: string;
    items: string[];
  }[];
  criticalNotes: string[];
}

export interface EligibilityInputs {
  visaType: VisaCategoryCode;
  employmentType: 'fulltime_insured' | 'business_owner' | 'freelancer' | 'student' | 'retired' | 'unemployed';
  monthlyIncome: 'under_15m' | '15m_30m' | '30m_50m' | 'over_50m';
  travelHistory: 'none' | 'asean_only' | 'developed_oecd' | 'korea_visited';
  savingsAmount: 'under_100m' | '100m_200m' | '200m_500m' | 'over_500m_assets' | 'need_support';
  hometownRegion: 'big_city' | 'standard_province' | 'caution_province';
  hasPriorRefusal: boolean;
}

export interface EligibilityEvaluationResult {
  score: number;
  level: 'Rất Cao (95%+)' | 'Tốt (85-94%)' | 'Trung Bình (70-84%)' | 'Cần Cải Thiện (<70%)';
  levelColor: string;
  summary: string;
  strengths: string[];
  riskFactors: string[];
  actionRecommendations: string[];
  recommendedDocs: string[];
}

export interface TrackingStep {
  stepNumber: number;
  title: string;
  description: string;
  timestamp?: string;
  status: 'completed' | 'current' | 'pending';
  location?: string;
}

export interface DossierRecord {
  trackingCode: string;
  applicantName: string;
  visaCode: VisaCategoryCode;
  visaName: string;
  submissionDate: string;
  estimatedCompletion: string;
  currentStepIndex: number; // 0 to 4
  assignedConsultant: {
    name: string;
    title: string;
    phone: string;
    avatarInitials: string;
  };
  kvacBranch: string;
  kvacAppNumber: string;
  consularNote: string;
  steps: TrackingStep[];
}

export interface PricingPlan {
  id: string;
  title: string;
  popular?: boolean;
  price: string;
  govFeeIncluded: boolean;
  idealFor: string;
  features: string[];
  ctaLabel: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientInitials: string;
  visaType: string;
  hometown: string;
  challenge: string;
  solution: string;
  result: string;
  duration: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'financial' | 'kvac' | 'interview';
}
