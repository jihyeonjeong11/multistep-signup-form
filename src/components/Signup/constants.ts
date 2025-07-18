import z from "zod/v3";

export const SIGN_UP_FIELDS = {
  "0": {
    name: "계정 정보",
    id: {
      name: "id",
      label: "아이디",
      placeholder: "아이디를 입력해주세요",
    },
    password: {
      name: "password",
      label: "비밀번호",
      placeholder: "비밀번호를 입력해주세요",
    },
    passwordConfirm: {
      name: "passwordConfirm",
      label: "비밀번호 확인",
      placeholder: "비밀번호를 다시 입력해주세요",
    },
    email: {
      name: "email",
      label: "이메일",
      placeholder: "이메일 주소를 입력해주세요",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "전화번호",
      placeholder: "전화번호를 입력해주세요 (예: 010-1234-5678)",
    },
  },
  "1": {
    name: "개인 정보",
    birthDate: {
      name: "birthDate",
      label: "생년월일",
      placeholder: "생년월일을 입력해주세요 (YYYY-MM-DD)",
    },
    gender: {
      name: "gender",
      label: "성별",
      options: [
        { value: "male", label: "남성" },
        { value: "female", label: "여성" },
        { value: "other", label: "선택 안 함" },
      ],
    },
    interests: {
      name: "interests",
      label: "관심사",
      options: [
        { value: "it", label: "IT/개발" },
        { value: "design", label: "디자인" },
        { value: "marketing", label: "마케팅" },
        { value: "etc", label: "기타" },
      ],
    },
    occupation: {
      name: "occupation",
      label: "직업",
      options: [
        { value: "", label: "선택해주세요" },
        { value: "student", label: "학생" },
        { value: "employee", label: "직장인" },
        { value: "freelancer", label: "프리랜서" },
        { value: "etc", label: "기타" },
      ],
    },
  },
  "2": {
    name: "소셜 연결",
    socialConnect: {
      name: "socialConnect",
      label: "소셜 계정 연결",
    },
  },
  "3": {
    name: "등록 완료",
  },
};

export const INITIAL_FORM_DATA = {
  // Step 1
  id: "",
  password: "",
  passwordConfirm: "",
  email: "",
  phoneNumber: "",

  // Step 2
  birthdate: "",
  gender: "",
  additionalInfo: "",

  // Step 3
  snsType: "",
  snsId: "",
};

export const step1Schema = z
  .object({
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
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const step2Schema = z.object({
  birthDate: z
    .string()
    .nonempty("생년월일을 입력해주세요.")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "생년월일은 YYYY-MM-DD 형식이어야 합니다.")
    .refine((dateString) => {
      const [year, month, day] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date <= new Date()
      );
    }, "유효하지 않거나 미래의 생년월일입니다."),
  gender: z.enum(["m", "f", ""], {
    message: "성별을 선택해주세요.",
  }),

  // 자유 value
});

export type Step2FormData = z.infer<typeof step2Schema>;

export const step3Schema = z.object({
  socialConnectAgreement: z.boolean().default(false),
});

export type Step3FormData = z.infer<typeof step3Schema>;
