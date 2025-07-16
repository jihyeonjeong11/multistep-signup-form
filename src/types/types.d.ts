export type SignUpFormData = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;

  dateOfBirth: string;
  gender: "male" | "female";
  job?: string;

  snsConnected?: boolean;
  snsType?: "kakao" | "naver" | "google";
  // or can be multiple
};

export type Step1Fields = Pick<
  SignupFormData,
  "username" | "password" | "email" | "phoneNumber"
>;
export type Step2Fields = Pick<
  SignupFormData,
  "dateOfBirth" | "gender" | "job"
>;
export type Step3Fields = Pick<SignupFormData, "snsConnected" | "snsType">;
