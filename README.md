# Multistep-signup-react

리액트로 작업한 단계별 회원가입 컴포넌트입니다. 컴포넌트별로 구분 된 클린한 코드 구조와 통일성 및 빠른 디자인 시스템 개발, 빠른 개발자 경험에 중점을 두었습니다.

## Dependencies

### Styling & Component UI:

- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/),
- [shadCN](https://ui.shadcn.com/)
- Radix: Primitive 단위로 인한 요소의 컴포넌트화, 웹 접근성 제공 및 Headless 원칙으로 인한 커스터마이징 및 디자이너와의 소통에 유리.
- shadCN: Radix가 적용된 템플릿을 import 해 빠른 프로토타이핑에 용이.
- Tailwind CSS: 빠르고 효율적인 스타일링 및 번들 최적화.

### Date picker:

- [react-day-picker](https://daypicker.dev/)
- shadcn 기반의 Date-picker 템플릿을 이용하기 위해 사용.

### Form management:

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) - Zod v3, not v4 [source](https://dev.to/dzakh/zod-v4-17x-slower-and-why-you-should-care-1m1)
- React-hook-form: 복잡한 형태의 Form의 퍼포먼스(rerender)에 있어 가장 완벽한 기능성을 제공함. Resolver를 통한 Validator도입이 용이함.
- Zod: 가장 쾌적한 Typescript와의 연결성을 제공함.

### Animations:

- [Motion](https://www.framer.com/motion/)
- React에 가장 친화적이고 가장 active한 커뮤니티를 가지고 있으므로 사용.

- [lottie-web](https://www.npmjs.com/package/lottie-web)
- 모션 그래픽 애니메이션을 사용하기 위해 사용. 많은 벡터 애니메이션을 무료 혹은 유료로 다운받거나 직접 제작해서 사용 가능.

## installation

- required node.js ver: ^20.0.0

```
git clone https://github.com/jihyeonjeong11/multistep-signup-form
cd multistep-signup-form
npm i
npm run dev
```
