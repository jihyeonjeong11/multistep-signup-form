import z from "zod/v3";

export const INITIAL_FORM_DATA = {
  // Step 1
  id: "",
  password: "",
  passwordConfirm: "",
  email: "",
  phoneNumber: "",

  // Step 2
  birthDate: undefined,
  gender: "",
  isTermAgreed: false,

  // Step 3
  isKakaoConnected: false,
  isNaverConnected: false,
  isGoogleConnected: false,
};

export const signupSchema = z
  .object({
    // --- Step 1: 계정 정보 (FirstForm) ---
    id: z
      .string()
      .min(4, "아이디는 최소 4자 이상이어야 합니다.")
      .max(20, "아이디는 최대 20자 이하여야 합니다.")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "아이디는 영문 소문자, 대문자, 숫자만 사용할 수 있습니다."
      )
      .nonempty("아이디를 입력해 주세요"),

    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(30, "비밀번호는 최대 30자 이하여야 합니다.")
      .regex(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).*$/,
        "비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다."
      )
      .nonempty("비밀번호를 입력해 주세요."),

    passwordConfirm: z.string().nonempty("비밀번호 확인을 입력해 주세요."),

    email: z
      .string()
      .email("유효한 이메일 형식이 아닙니다.")
      .nonempty("이메일을 입력해 주세요."),

    phoneNumber: z
      .string()
      .min(10, "전화번호는 최소 10자리 이상이어야 합니다.")
      .max(11, "전화번호는 최대 11자리를 넘을 수 없습니다.")
      .regex(/^\d+$/, "전화번호는 숫자만 입력해 주세요. (하이픈 제외)")
      .nonempty("전화번호를 입력해 주세요."),

    // --- Step 2: 개인 정보 (SecondForm) ---
    birthDate: z
      .date({
        required_error: "생년월일을 입력해주세요.",
        invalid_type_error: "유효하지 않은 날짜 형식입니다.",
      })
      .refine((date) => {
        if (isNaN(date.getTime())) {
          return false;
        }

        return date <= new Date();
      }, "유효하지 않거나 미래의 생년월일입니다."),

    gender: z.string().refine((val) => val !== "", {
      // z.enum 말고 다른 타입 찾을 것.
      message: "성별을 선택해주세요.",
    }),

    isTermAgreed: z.boolean().optional(),

    // --- Step 3: 소셜 연결 (ThirdForm) ---
    isKakaoConnected: z.boolean().optional(),
    isNaverConnected: z.boolean().optional(),
    isGoogleConnected: z.boolean().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export type Step1FormData = Pick<
  typeof INITIAL_FORM_DATA,
  "id" | "password" | "passwordConfirm" | "email" | "phoneNumber"
>;
