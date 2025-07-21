# Multistep-signup-react

리액트로 작업한 단계별 회원가입 컴포넌트입니다. 컴포넌트별로 구분 된 클린한 코드 구조와 통일성 및 빠른 디자인 시스템 개발에 중점을 두었습니다.

## Dependencies

### Styling & Component UI:

- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/),
- [shadCN](https://ui.shadcn.com/)
- Radix: Primitive 단위로 인한 요소의 컴포넌트화, 웹 접근성 제공 및 Headless 원칙으로 인한 커스터마이징 및 디자이너와의 소통에 유리.
- shadCN: Radix가 적용된 템플릿을 import 해 빠른 프로토타이핑에 용이.
- Tailwind CSS: 빠르고 효율적인 스타일링 및 번들 최적화.

### Form management:

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) - Zod v3, not v4 [source](https://dev.to/dzakh/zod-v4-17x-slower-and-why-you-should-care-1m1)
- Modern한 폼을 다루는 라이브러리 중 가장 active한 라이브러리로 선정. Validator와 함께 타입에 최대한 맞춘 개발을 할 수 있음.

선택 이유: 현대 웹 애플리케이션에서 복잡한 폼을 효율적으로 관리하고 안정성을 확보하는 것은 필수적입니다. React Hook Form은 비제어 컴포넌트(Uncontrolled Components) 방식을 채택하여 불필요한 리렌더링을 최소화하고 폼 성능을 최적화하는 데 강점이 있습니다. 이는 다단계 폼과 같이 여러 필드를 관리하는 상황에서 사용자 경험에 긍정적인 영향을 미칩니다.

Zod는 TypeScript 기반의 스키마 유효성 검사 라이브러리로, 런타임과 개발 단계 모두에서 강력한 타입 안전성을 제공합니다. React Hook Form과 Zod를 함께 사용함으로써, 가장 활발하게 개발되고 커뮤니티 지원이 좋은 라이브러리 조합을 통해 유효성 검사를 포함한 폼 로직을 최대한 타입에 맞춰 견고하고 유지보수하기 쉽게 구현할 수 있었습니다. 특히, Zod v3을 사용한 것은 벤치마크 기반의 성능 최적화를 고려한 선택입니다.

### Web animation:

- [Motion](https://www.framer.com/motion/)
- 복잡한 웹 애니메이션을 다룰 수 있는 가장 active한 라이브러리이므로 사용.

### Date picker:

- [react-day-picker](https://daypicker.dev/)
- shadcn 기반의 Date-picker 템플릿을 이용하기 위해 사용.

### Vector animation

- [lottie-web](https://www.npmjs.com/package/lottie-web)
- 웹 애니메이션으로 구현하기 힘든 이미지 자체의 애니메이션을 위해 사용.

## installation

- required node.js ver: ^20.0.0

```
git clone https://github.com/jihyeonjeong11/multistep-signup-form
cd multistep-signup-form
npm i
npm run dev
```
