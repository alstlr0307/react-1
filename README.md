# 202130104 김민식

# 6월 5일 강의내용

## 📌 기존 웹사이트에 React 컴포넌트 통합하기

### 기존 프로젝트에 React 추가

#### [ 페이지 어디에서든 React 컴포넌트 렌더링하기 ]

- 이전 단계에서는, **메인 파일 최상단**에 아래 코드를 넣었습니다.

```jsx
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

---

### 🧩 기존 프로젝트에 React 추가

#### ✅ 이렇게 하면 `document.getElementById`로 HTML 엘리먼트를 찾아  
`createRoot`에 전달함으로써 해당 요소 내부에 React 컴포넌트를 렌더링할 수 있습니다.

```js
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: 실제로 네비게이션 바를 구현합니다.
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```

💡 이 코드에는
"This paragraph is a part of HTML."
라는 문구를 찾을 수 없습니다.

어디에 있을까요?

👉 codesandbox에서 확인해 보세요.

---

### 🧩 기존 프로젝트에 React 추가

- 기존에 존재하던 `index.html`의 원본 **HTML 콘텐츠가 그대로 남아있는 것**을 확인할 수 있습니다.

- 하지만 이제는 `<nav id="navigation">` 안에  
  개발자가 직접 작성한 **`NavigationBar` React 컴포넌트**가 나타납니다.

- 기존 HTML 페이지에서 React 컴포넌트가 렌더링 되는 것에 대해 더 알아보려면  
  👉 [`createRoot` 사용법 문서](https://react.dev/reference/react-dom/client/createRoot)를 읽어보세요.  
  ※ 이 문서는 **React 내부 공식 문서**입니다.

---

- 기존 프로젝트에서 React를 도입할 때,  
  일반적으로 **작은 상호작용용 컴포넌트(예: 버튼)**에서 시작하여  
  → 점진적으로 "상위 구조로 확장하면서"  
  → 결국에는 전체 페이지가 React로 빌드될 때까지 이 과정을 반복하게 됩니다.

- 이 지점에 도달한다면  
  👉 React의 장점을 최대한 활용하기 위해  
  **React 프레임워크로 마이그레이션** 하는 것을 권장합니다.

---

### 🛠 에디터 설정하기

- **VS Code**는 현재 가장 많이 사용되는 에디터 중 하나입니다.

- VS Code에 설치할 수 있는 **익스텐션의 종류는 매우 많고**,  
  **GitHub**과 같은 외부 서비스와의 연동도 지원합니다.

- 아래에 나열된 기능들은 대부분 **익스텐션으로 존재**하기 때문에  
  **VS Code의 설정은 다양한 방식으로 쉽게 변경**할 수 있습니다.

---

#### 그 외에도 React 커뮤니티에서는 다음과 같은 에디터들이 흔히 사용됩니다:

- **WebStorm**  
  → JavaScript에 특화되어 설계된 통합 개발 환경입니다.

- **Sublime Text**  
  → JSX와 TypeScript를 지원하며,  
  → **문법 강조 및 자동 완성 기능**이 내장되어 있습니다.

- **Vim**  
  → 모든 종류의 텍스트를 매우 효율적으로 생성하고 변경할 수 있도록  
    설계된 텍스트 편집기입니다.

---

### 🧩 에디터 기능 추천

이러한 기능들이 기본으로 설정된 에디터들도 있지만,  
**별도의 익스텐션 추가가 필요한 경우**도 존재합니다.  
현재 사용 중인 에디터에서 어떤 기능을 지원하는지 꼭 확인해 보세요!

---

#### 1. ✅ Linting

- **코드 린터**는 코드를 작성하는 동안  
  → **실시간으로 문제를 찾아줌으로써 빠른 문제 해결이 가능**하도록 도와줍니다.

- **[ESLint](https://eslint.org/)**는 많이 사용되고  
  **JavaScript를 위한 대표적인 오픈소스 린터**입니다.

  - [React를 위한 추천 설정과 함께 ESLint 설치하기](https://eslint.org/docs/latest/use/configure)  
    (※ 설치 전 `Node`가 설치되어 있어야 함)
  
  - [VS Code의 ESLint 공식 익스텐션과 통합](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- 프로젝트의 모든 `eslint-plugin-react-hooks` 규칙이 활성화됐는지 꼭 확인하세요.  
  → 이 규칙은 필수이며, **가장 심각한 버그를 조기에 발견**하게 해줍니다.

- 권장되는 `eslint-config-react-app` 프리셋에는  
  → 이미 이 규칙이 포함되어 있습니다.

---

### ✨ Formatting

- 다른 개발자들과 협업할 때 가장 피하고 싶은 것은  
  → **탭 vs 공백**에 대한 논쟁일 것입니다.

- 다행히 [**Prettier**](https://prettier.io/)를 사용하면  
  → 직접 지정해 놓은 규칙들에 부합하도록 **코드 형식을 깔끔하게 정리**할 수 있습니다.

- Prettier를 실행하면 다음과 같은 요소들이 설정에 맞춰 자동 정리됩니다:
  - **탭은 공백으로 변환**
  - **들여쓰기**
  - **따옴표 형식** 등 다양한 포맷

- **파일을 저장할 때마다 Prettier가 자동 실행되도록 설정**하면  
  → 이런 작업들이 자동으로 수행됩니다.  
  → 이것이 **가장 이상적인 설정**입니다.

---

#### 🔧 Prettier VS Code 익스텐션 설치 방법

1. **VS Code 실행하기**  
2. **Ctrl/Cmd + P** 눌러 **퀵오픈 사용**  
3. 아래 명령 입력:  ext install esbenp.prettier-vscode

---


### 💾 저장 시점에 포매팅하기

- 저장할 때마다 **코드가 자동 포매팅**되는 것이 가장 이상적입니다.  
- 이러한 설정은 **VS Code 자체적으로 내장**되어 있습니다.

---

#### ✅ 설정 방법

1. **VS Code에서 `Ctrl/Cmd + Shift + P`** 누르기  
2. `"settings"`라고 입력  
3. 엔터 누르기  
4. 검색 창에서 `"format on save"`라고 입력  
5. `"format on save"` 옵션이 **체크되어 있는지 확인**

---

### ⚠️ 충돌 방지 및 추가 팁

- 만약 **ESLint 프리셋에 포매팅 규칙**이 있는 경우,  
  → **Prettier와 충돌**을 일으킬 수 있습니다.

- ESLint는 오직 **논리적 오류만 잡도록 설정**하고,  
  → [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)를 사용해  
  → ESLint 프리셋의 **모든 포매팅 규칙을 비활성화**하는 것을 권장합니다.

- `pull request`가 머지되기 전에 코드 형식이 맞는지 확인하려면  
  → 지속적인 통합(CI)을 위해 다음 명령 사용:  prettier --check

  ---

## 🧠 TypeScript 사용하기 (React 컴포넌트)

- **JSX를 포함하고 있는 모든 파일은 `.tsx` 확장자**를 사용해야 합니다.

- `.tsx`는 해당 파일이 JSX를 포함하고 있음을 TypeScript에게 알려주는  
  → **전용 확장자**입니다.

---

- React와 함께 **TypeScript를 작성하는 것**은  
  → React와 함께 **JavaScript를 작성하는 것과 매우 유사**합니다.

- **가장 큰 차이점**은 컴포넌트의 `props`에  
  → **타입을 명시할 수 있다는 점**입니다.

- 이 타입 정보는 에디터에서:
  - **정확성을 검사하고**
  - **인라인 문서처럼 자동 제공되는 도구**로 활용됩니다.

---

> 빠르게 시작하고 싶다면 가이드에서 예시로 등장하는  
> `MyButton` 컴포넌트를 참고하세요.  
> `title` 같은 props에 타입을 선언하는 방법이 소개되어 있습니다.
- 이러한 타입은 에디터에서 **정확성을 검사**하고,  
  → **인라인 문서**로도 제공되어 개발 시 유용하게 사용됩니다.

- 빠르게 시작하기 가이드에서는  
  `MyButton` 컴포넌트를 예로 들어  
  → **버튼의 `title`을 설명하는 타입을 추가**하는 방법을 소개합니다.

---

## 🔧 App.tsx 예제: TypeScript 컴포넌트 사용하기

- `App.tsx`를 새로 만들고 `App.js`에서 이를 불러오도록 수정합니다.

---

### 📄 `MyApp.tsx`

```tsx
function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}
```

```js
import MyApp from './MyApp.tsx';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello, Chapter06!
        <MyApp />
      </header>
    </div>
  );
}
```

이 문서에 포함된 샌드박스는 TypeScript 코드를 작성할 수 있지만,
→ 타입 검사는 수행되지 않습니다.

즉, TypeScript 샌드박스를 수정해 학습할 수는 있지만
→ 타입 오류나 경고는 표시되지 않을 수 있으니 참고하세요.

---

### 🔁 TypeScript와 함께 Hooks 사용하기

- `@types/react`의 타입 정의에는 **내장 Hooks에 대한 타입이 포함**되어 있으므로  
  → **추가 설정 없이 컴포넌트에 사용할 수 있습니다.**

- 이 타입 정의는 **작성된 컴포넌트 코드를 기반으로 타입을 추론**하기 때문에,  
  대부분의 경우 **추가적인 타입 선언 없이도 타입을 정확히 유추**할 수 있습니다.

---

### 📌 Hooks에 타입을 제공하는 방법 - `useState` 예시

- `useState` 훅은 **초기 state로 전달된 값**을 기준으로  
  → **타입을 자동 추론**합니다.

```ts
const [enabled, setEnabled] = useState(false);
```

위 예제에서:

enabled는 boolean 타입

setEnabled는 boolean 값을 설정하는 함수

---

# 5월 29일 강의내용
(내용 축약)       
📌 애플리케이션 최적화화,

🚀 애플리케이션 성능 개선,
선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로 다음과 같은 다른 렌더링 패턴을 구현해야 합니다:

서버 사이드 렌더링(SSR)
→ SSG와 유사하지만, 매 요청 시 서버에서 정적 페이지 생성,

정적 사이트 생성(SSG)
→ 빌드 시 한 번에 모든 정적 페이지 생성,

React 서버 컴포넌트(RSC)
→ 서버에서 동작하는 컴포넌트로, DB 접근 등 서버 자원 활용 가능,

---

처음에는 이러한 기능이 필요하지 않더라도
나중에 SSR, SSG, RSC가 도움이 될 수 있는 여러 방법이 있습니다.

---

🧩 단일 페이지 앱(SPA),
SPA는 단일 HTML 페이지를 로드하고,
사용자가 앱과 상호작용할 때 페이지를 동적으로 업데이트합니다.

SPA는 시작은 쉽지만,
→ 초기 로드 시간이 느릴 수 있습니다.,

SPA는 대부분의 빌드 도구에서 기본 아키텍처로 사용됩니다.,

스트리밍 서버 측 렌더링(SSR),
서버에서 페이지를 렌더링하고 완전히 렌더링된 페이지를 클라이언트로 전송합니다.,
SSR은 성능을 향상시킬 수 있지만, 단일 페이지 앱보다 설정 및 유지 관리가 더 복잡할 수 있습니다.,
특히 스트리밍 기능이 추가되면, SSR은 설정 및 유지 관리가 매우 복잡해질 수 있습니다.,
Vite의 SSR 가이드를 참조하세요.,

---

정적 사이트 생성(SSG),
빌드 시점에 앱의 모든 정적 HTML 파일을 생성합니다.,
SSG는 성능을 향상시킬 수 있지만, 서버 측 렌더링(SSR)보다 설정 및 유지 관리가 더 복잡할 수 있습니다.,
Vite의 SSG 가이드를 참조하세요.,

---

기존 프로젝트에 React 추가,
기존 프로젝트에 인터랙티브 기능을 추가하고 싶다면,
React로 프로젝트를 다시 작성할 필요는 없습니다.,

💡 인터랙티브 기능이란
사용자와 시스템 간의 상호 작용을 가능하게 하는 기능을 말합니다.

기존 스택에 React를 추가하고
→ 어디에서나 인터랙티브 React 컴포넌트를 렌더링하세요.,

---

📌 기존 웹사이트의 전체 하위 경로에 React 사용,
Rails와 같은 다른 서버 기술로 구축한 기존 웹 앱(example.com)이 있고,
example.com/some-app 경로로 시작하는 모든 경로를
React로 완전히 구현하고 싶다고 가정해 봅시다.,

설정 방법은 다음과 같습니다.,

  
React 기반 프레임워크 중 하나를 사용하여 앱의 React 부분을 빌드합니다.
프레임워크 설정에서 기본 경로를 /some-app 으로 지정합니다.
(예: Next.js, Gatsby)

# 5월 22일 강의내용

## 📌 프로젝트 Installation

### 💻 프로젝트에 Reat 도입하기

React는 **점진적으로 적용할 수 있도록 설계**되었으며,  
**필요한 만큼 React를 사용할 수 있습니다.**

---

React를 **맛보기로 접해보거나**,  
간단한 HTML 페이지에 **약간의 상호작용**을 추가하거나,  
복잡한 React 기반 앱을 시작하려는 경우에도 이 섹션을 참고하면 됩니다.

---

#### ✅ 이 장에서는 다음을 다룹니다:

- 새로운 **React 프로젝트**를 시작하는 방법  
- 기존 프로젝트에 **React를 추가**하는 방법  
- **에디터 설정** 방법  
- **React 개발자 도구 설치** 방법

> React는 가볍게 도입할 수도 있고, 큰 규모의 앱도 유연하게 관리할 수 있게 도와줍니다.

---
---

### ⚡ React 시도하기

단순히 **React를 바로 사용해보고 싶다면**,  
아무것도 설치하지 않고도 샌드박스를 통해 실습할 수 있습니다!

---

#### 💡 빠르게 시작하는 방법

- 로컬(local)에서 사용해보고 싶다면, **Node.js만 설치**하면 됩니다.
- 직접 코드를 편집하거나, 오른쪽 상단의 **“Fork(포크)” 버튼**을 눌러 새 탭에서 열 수 있습니다.
- React 공식 문서 대부분 페이지에는 이와 같은 **샌드박스 예제**가 포함되어 있습니다.
- CodeSandbox, **StackBlitz**, **CodePen** 등의 **온라인 에디터**에서도 React를 지원합니다.

---

#### 🧪 예제 코드

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return <Greeting name="World" />;
}

```

---

---

### 🛠️ 새로운 React 앱 만들기

React로 **새로운 앱이나 웹사이트를 구축**하려면,  
**프레임워크부터 시작하는 것이 좋습니다.**

---

#### ✅ 왜 프레임워크부터 시작할까?

- 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나,  
  자체 프레임워크를 **빌드**하고 싶다면 적합합니다.
- React의 **기본 사용법을 배우고**, 처음부터 앱을 구성하고 싶은 경우에도 좋습니다.

---

#### 🧱 풀스택 프레임워크란?

- **풀스택 프레임워크**는 앱을 배포하고 확장하는 데 필요한  
  모든 기능을 프로덕션 수준에서 지원합니다.
- React의 최신 기능을 통합하고,  
  **React 아키텍처**를 효과적으로 활용할 수 있도록 도와줍니다.

---

> ✅ **중요합니다!**

풀스택 프레임워크에는 **서버가 꼭 필요하지 않습니다.**

- 이 페이지의 모든 React 앱은 클라이언트 즉시 렌더링(CSR),  
  단일 페이지 앱(SPA), 정적 사이트 생성(SSG)을 지원합니다.
- 대부분 CDN이나 정적 파일 호스팅 서비스를 통해  
  **서버 없이도 운영**할 수 있습니다.
- 프레임워크를 사용하면 페이지, 라우팅, 데이터 페칭, 상태 관리 등 다양한 기능을  
  **자동으로 구성**할 수 있습니다.

---

### 🚀 React 앱을 위한 주요 프레임워크

---

### 📦 Next.js (앱 라우터)

- **Next.js**는 React의 아키텍처를 최대한 활용한  
  **풀스택 React 앱 프레임워크**입니다.
- 앱 라우팅과 서버 기능을 함께 제공하며,  
  **Vercel에서 공식적으로 유지·관리**됩니다.
- 빌드한 앱은 **Node.js 서버**, 혹은 **정적 파일**로  
  다양한 호스팅 환경에 배포할 수 있습니다.
- 서버가 필요 없는 **정적 내보내기**도 지원됩니다.
- **Vercel**은 추가적으로 유료 클라우드 서비스를 제공하며,  
  사용자가 직접 옵션을 선택할 수 있는 **opt-in 방식**입니다.

---

### 🌐 React Router (v7)

- `React Router`는 **가장 널리 사용되는 라우팅 라이브러리**로,  
  `Vite`와 함께 사용할 경우 경량 풀스택 React 프레임워크를 만들 수 있습니다.
- **표준 Web API** 기반으로 구성되어 있고,  
  다양한 플랫폼에 맞는 **배포 템플릿**을 지원합니다.
- 현재 `Shopify`에서 관리되고 있습니다.

> 목적에 따라 Next.js와 React Router 중 선택하여 사용하면 좋습니다.

---

## 📱 Expo (네이티브 앱용)

- **Expo**는 네이티브 UI를 기반으로 **Android, iOS, Web**을 아우르는  
  **범용 앱을 만들 수 있는 React 프레임워크**입니다.
- 네이티브 기능을 쉽게 쓸 수 있도록 **React Native SDK**를 제공합니다.
- **Expo**는 Expo(회사)에서 관리합니다.
- Expo는 앱을 **구글 플레이나 앱스토어에 제한 없이 배포**할 수 있도록 돕습니다.
- 추가적으로 **유료 클라우드 서비스**도 함께 제공합니다.

---

## 🌐 풀스택 React의 다양한 선택지

React 기반 풀스택 개발을 위해 **Next.js 외에도 다양한 프레임워크**가 있습니다:

---

### ⚙️ TanStack Start (Beta)

- `TanStack Start`는 `TanStack Router` 기반의 **풀스택 React 프레임워크**입니다.
- `Vite`, `Nitro`, SSR, 스트리밍, 서버 함수 등  
  **현대적인 웹 기능을 모두 포함**한 유연한 환경을 제공합니다.

---

### 🌲 RedwoodJS

- `RedwoodJS`는 **사전 구성된 패키지**로  
  쉽게 풀스택 앱을 만들 수 있도록 도와주는 프레임워크입니다.
- 빠른 개발과 배포에 적합한 **개발자 친화적인 구성**을 제공합니다.

> 프로젝트의 목적에 따라 다양한 React 프레임워크 중 하나를 선택해보세요.

---

## 🔧 [처음부터 시작하기] 기존 프레임워크 없이 React 앱 만들기

기존 프레임워크를 사용하지 않고도 React 앱을 시작할 수 있는 다른 옵션이 있습니다.

---

### 💡 어떤 경우에 적합할까요?

- 기존 프레임워크가 제공하지 않는 특정 조건이 필요할 때  
- **자체 프레임워크를 직접 구축**하고자 할 때  
- React의 **기본 사용법을 깊이 익히고 싶은 경우**

---

### 🧠 주의할 점

- 처음부터 시작하면 더 많은 **유연성**을 얻을 수 있지만,  
  라우팅, 데이터 패칭, 일반적인 기능에 대한 도구를 직접 선택해야 합니다.
- 이는 결국 **자신만의 프레임워크를 구축**하는 것과 유사합니다.

---

### 🛠️ 어떻게 시작할 수 있나요?

- 빌드 도구로는 **Vite**, **Parcel**, **esbuild** 등을 사용할 수 있습니다.
- 이 경우, React 프로젝트의 구조를 처음부터 설정해야 하며  
  공식 문서의 **"처음부터 React 앱 만들기 가이드"**를 참고하는 것이 좋습니다.

> 이 방식은 고급 사용자를 위한 옵션이지만, React를 깊이 이해하는 데 매우 도움이 됩니다.

---

## 🧱 처음부터 React 앱 만들기

다음과 같은 경우, **React만으로도 처음부터 앱을 만들 수 있습니다.**

1. 기존 프레임워크가 **지원하지 않는 제약 조건**이 있는 경우  
2. **자체 프레임워크를 구성**하고 싶은 경우  
3. **React의 기본 개념을 배우고 싶은 경우**

---

## ⚙️ [1단계] 빌드 도구 설치

첫 번째 단계는 `vite`, `parcel`, 또는 `esbuild`와 같은  
**빌드 도구를 설치하는 것**입니다.

---

### 🛠️ 주요 기능

이러한 빌드 도구는 다음과 같은 기능을 제공합니다:

1. **코드를 패키징하고 실행하는 기능**  
2. **로컬 개발용 서버 제공**  
3. 앱을 **배포 가능한 형태로 빌드**할 수 있는 명령어 제공

---

> 참고:  
> React 공식 빌드 도구인 **Create React App (CRA)** 도 여전히 사용 가능합니다.  
> `package.json` 파일을 통해 어떤 빌더를 사용하는지 확인할 수 있습니다.

---

## ⚡ Vite

`Vite`는 현대 웹 프로젝트에서 **더 빠르고, 가벼운 개발 환경**을 제공하는  
빌드 도구입니다.

---

### ✅ Vite의 특징

- 독창적이며, 기본적으로 **합리적인 기능**이 내장되어 있습니다.
- **빠른 새로고침**, JSX, Babel/SWC, 기타 일반적인 기능을  
  지원하는 **플러그인 생태계**를 보유하고 있습니다.
- 시작 시, `React 플러그인`, `React SWC`, `React SSR 예제 프로젝트` 등을 참고하세요.
- `React Router`, `Next.js` 등 우리가 추천하는 프레임워크 중 하나에서  
  **빌드 도구로 Vite를 채택**하고 있습니다.

---

### 🛠️ 설치 명령어

```bash
npm create vite@latest my-app -- --template react
```

---

## 📦 Parcel

`Parcel`은 **우수한 개발 경험과 확장 가능한 아키텍처**를 결합한 빌드 도구입니다.  
초기 단계에서 시작해도, **대규모 프로덕션 앱**으로 확장할 수 있습니다.

---

### ✅ Parcel의 특징

- 빠른 새로고침, JSX, **TypeScript**, **Flow**, **스타일링**을 기본적으로 지원  
- 복잡한 설정 없이도 빠르게 시작할 수 있음  
- 공식 **React 레시피**를 참고해 시작하는 것이 좋습니다

---

## ⚙️ Rsbuild

`Rsbuild`는 `Rspack` 기반으로 만들어진 **고성능 React 빌드 도구**입니다.  
정교한 설정과 성능 최적화 기능을 내장하여 **즉시 사용 가능한 환경**을 제공합니다.

---

### ✅ Rsbuild의 특징

- 빠른 새로고침, JSX, **TypeScript**, **스타일링** 등  
  React 개발에 필요한 기능들을 기본적으로 제공합니다
- 설정 유연성이 높고, **고속 빌드 환경**을 원할 때 적합합니다
- 시작할 때는 공식 **React 가이드**를 참고하면 좋습니다

---

## 📱 React Native용 Metro

React Native를 처음부터 사용하려면,  
**React Native 전용 JavaScript 번들러인 Metro**를 사용해야 합니다.

---

### ✅ Metro의 특징

- iOS 및 Android 같은 플랫폼을 대상으로 한 **변들링을 지원**합니다.  
- 하지만 이 문서에서 소개한 Vite, Parcel, Rsbuild 같은 도구에 비해  
  **기능은 상대적으로 부족**한 편입니다.

---

### 🛠️ 어떤 경우 사용하나요?

- 프로젝트에 **React Native 지원이 필요한 경우**에만 Metro를 사용하세요.
- 그렇지 않다면, **Vite, Parcel, Rsbuild**와 같은 도구로 시작하는 것이 훨씬 효율적입니다.

> Native 앱이 아니라면 Metro보다 다른 빌드 도구들이 더 유리합니다.

---

## 🧩 공통 애플리케이션 패턴 구축

앞에서 소개한 빌드 도구들은 **클라이언트 전용 단일 페이지 앱(SPA)**을 만드는 데 적합하지만,  
**라우팅, 데이터 가져오기, 스타일링 등 추가 기능에 대한 솔루션**은 포함되어 있지 않습니다.

---

### 🔧 React 생태계는 어떤 문제를 해결하나요?

- React 생태계에는 이러한 기능을 보완해주는 **다양한 도구**가 존재합니다.  
- 여기서는 대표적인 도구들을 소개하지만,  
  더 나은 대안이 있다면 자유롭게 **다른 도구로 대체해도 무방**합니다.

---

## 🔀 Routing

- 라우팅은 사용자가 **특정 URL에 접근했을 때 어떤 콘텐츠나 페이지를 보여줄지** 결정합니다.
- 앱의 여러 부분에 대해 **URL과 매핑되는 라우트를 설정**해야 합니다.
- **중첩된 경로**, **경로 매개변수**, **쿼리 매개변수** 등도 함께 처리해야 합니다.
- 라우트는 **코드 내부에 구성하거나**,  
  **요소 폴더 및 파일 구조에 따라 자동 정의**할 수도 있습니다.

> SPA 구조에서는 라우팅 설정이 필수이며, 프로젝트 규모에 따라 동적으로 구성해야 합니다.

---

## 🔗 라우터의 중요성과 추천 도구

라우터는 **최신 애플리케이션의 핵심 구성 요소**입니다.  
일반적으로 다음과 같은 기능들을 포함합니다:

- **데이터 페치**:  
  빠른 로딩을 위해 전체 페이지에 필요한 데이터를 **미리 불러오는 기능**

- **코드 분할**:  
  클라이언트에서 로딩되는 JS 번들의 크기를 줄이기 위한 **모듈 분리 전략**

- **페이지 렌더링 방식 설정**:  
  각 페이지가 **서버/클라이언트/정적** 방식 중 어떤 방식으로 렌더링될지를 결정

---

### ✅ 추천 라우팅 도구

- [React Router](https://reactrouter.com)  
- [TanStack Router](https://tanstack.com/router)

> 규모가 커질수록 라우팅 전략은 퍼포먼스에 큰 영향을 미치므로 초반 설계가 중요합니다.

---

## 🔄 Data Fetching: 데이터 미리 가져오기

대부분의 애플리케이션에서 서버나 외부 데이터 소스로부터  
**데이터를 미리 가져오는 것**은 핵심적인 기능입니다.

---

### 📌 미리 가져오기를 수행하면 다음을 처리할 수 있습니다:

- 로딩 상태
- 오류 상태
- 가져온 데이터의 캐싱
- 데이터 재사용 및 갱신 등 복잡한 기능

---

## 📥 데이터 가져오기 전략

- 수동으로 데이터를 가져오고 캐싱하는 과정은 복잡하고 반복적입니다.  
  그래서 **데이터 가져오기 라이브러리**를 사용하면 개발자가 데이터 처리에 집중할 수 있습니다.

- 일반적으로 **클라이언트에서 직접 데이터를 가져오지만**,  
  빠른 프레임워크에서는 이 과정을 **라우팅 로직과 통합**하거나  
  **서버 렌더링**에 활용할 수도 있습니다.

---

### ✅ 최적화 전략

- 컴포넌트 내부에서 직접 데이터를 가져오면  
  **네트워크 요청 폭주**로 인해 초기 렌더링 시간이 지연될 수 있습니다.
- 따라서 **라우트 수준에서 선제적으로 데이터를 미리 가져오는 전략**이 효율적입니다.

> 이렇게 하면 페이지가 로드될 때 필요한 모든 데이터를 **한 번에 불러올 수 있어**  
> 사용자 경험이 더욱 매끄럽습니다.

---

## 🚀 애플리케이션 성능 개선

선택한 빌드 도구는 보통 **단일 페이지 앱(SPA)**만 지원합니다.  
이 경우 서버 사이드 렌더링(SSR)이나 정적 사이트 생성(SSG)과 같은  
**고급 렌더링 패턴**은 별도로 구현해야 합니다.

---

### 📌 렌더링 방식의 구분

- **SSR (Server-Side Rendering)**: 매 요청마다 서버에서 정적 페이지 생성  
- **SSG (Static Site Generation)**: 빌드시 한 번에 정적 페이지들을 생성  
- **RSC (React Server Components)**: 서버에서 동작하는 React 컴포넌트로 DB 접근 가능

> 위 기능들은 사용자의 요청에 따라 동적으로 페이지를 렌더링하거나,  
> 서버에서 미리 데이터를 포함한 HTML을 생성할 수 있게 도와줍니다.

---

### 💡 SPA의 특징

단일 페이지 앱(SPA)은 **하나의 HTML을 로드하고**,  
사용자와의 상호작용에 따라 **페이지를 동적으로 업데이트**합니다.

- SPA는 초기 로드 속도가 느릴 수 있음  
- 하지만 대부분의 빌드 도구에서 **기본 아키텍처로 채택**됩니다

> SSR, SSG, RSC는 SPA에 비해 구현이 복잡하지만,  
> 이후 성능 최적화와 검색 엔진 대응에 유리할 수 있습니다.

# 5월 15일 강의내용

## 📌 React를 이용해서 최소한의 데이터를 완벽하게 UI State 구현하기

---

### 💡 최소한의 데이터만 이용해서 완성하기

UI를 **상호작용(interactive)**하게 만들기 위해서는  
사용자가 **기반 데이터 모델을 변경할 수 있게** 해야 합니다.

React는 이를 위해 **state**라는 개념을 제공합니다.

---

#### ✅ 핵심 요약

- state는 컴포넌트가 **기억해야 하는 변경 가능한 데이터의 최소 집합**입니다.
- 가장 중요한 원칙은 **중복 배제 원칙(Don't Repeat Yourself)**입니다.
- **앱이 필요로 하는 최소한의 state만 유지**하고,  
  나머지 값은 필요할 때마다 계산하는 것이 좋습니다.

---

#### 🧠 예시로 이해하기

예를 들어, 쇼핑 리스트를 만드는 경우:

- 상품 아이템들을 **배열 형태의 state**로 저장합니다.
- **상품 개수**를 UI에 표시하고 싶다면  
  별도로 state를 두는 대신, **배열의 길이(`array.length`)를 계산**해서 보여줍니다.

> 불필요하게 많은 state를 두면 버그와 비효율이 생길 수 있습니다.  
> 항상 "진짜 필요한 데이터만" state로 관리하세요.

---

### 🧠 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기

예시 애플리케이션에서 다음과 같은 데이터가 있다고 가정해 봅시다:

- 제품의 원본 목록  
- 사용자가 입력한 검색어  
- 체크박스의 값  
- 필터링된 제품 목록

이 중 **어떤 데이터를 state로 관리해야 할까요?**

---

#### ✅ 핵심 판단 기준

아래 **세 가지 질문**을 통해 state 여부를 판단할 수 있습니다:

1. **시간이 지나도 변하지 않나요?**  
   → 그렇다면 **state가 아닙니다**.

2. **부모로부터 props로 전달되나요?**  
   → 그렇다면 **state가 아닙니다**.

3. **컴포넌트 안의 다른 state나 props로 계산할 수 있나요?**  
   → 그렇다면 **절대로 state가 아닙니다!**

---

## 🧩 어떤 것이 state인지 판별해보기

앞에서 본 애플리케이션의 데이터를 다시 한 번 정리해봅시다.

---

### ✅ 데이터별 판단

1. **제품의 원본 목록**  
   → props로 전달되므로 **state가 아닙니다**.

2. **사용자가 입력한 검색어**  
   → 시간이 지남에 따라 변하고, 다른 요소로부터 계산될 수 없으므로 **state입니다**.

3. **체크박스의 값**  
   → 이 또한 시간에 따라 바뀌고 다른 요소로부터 계산할 수 없으므로 **state입니다**.

4. **필터링된 제품 목록**  
   → 원본 목록, 검색어, 체크박스 값으로부터 계산이 가능하므로 **state가 아닙니다**.

---

> ✅ 따라서, **검색어**와 **체크박스의 값**만이 state입니다  

---

---

## 🧩 어떤 컴포넌트가 state를 가져야 할까?

앱에서 **최소한으로 필요한 state**를 결정했으니,  
이제는 **어떤 컴포넌트가 이 state를 소유하고 변경할 책임을 져야 하는지** 정할 차례입니다.

---

### 🎯 기본 원칙

React는 항상 **단방향 데이터 흐름(one-way data flow)**을 따릅니다.  
즉, **부모 → 자식 방향으로만** 데이터를 전달해야 합니다.

---

### ❓ 명확하지 않을 때는?

처음에는 어떤 컴포넌트가 state를 가져야 하는지 명확하지 않을 수 있습니다.  
React에 익숙하지 않은 경우라면 더더욱 헷갈릴 수 있죠.

하지만, 아래의 단계를 따라가면 결정할 수 있습니다:

---

### ✅ 결정 단계

각 **state**에 대해 다음을 수행하세요:

1. 해당 state를 기반으로 **렌더링되는 모든 컴포넌트**를 찾습니다.  
2. 이 컴포넌트들의 **가장 가까운 공통 부모 컴포넌트**를 찾습니다.  
   → 이 부모 컴포넌트가 그 state를 가져야 합니다!

> 모든 관련 컴포넌트를 포함하는 **공통 상위 컴포넌트**에 state를 위치시키는 것이 핵심입니다.

---

## 🧠 State가 어디에 있어야 할 지 정하기

state를 어디에 위치시킬지는 다음 원칙을 따르세요:

- 대부분의 경우, **공통 부모 컴포넌트**에 state를 둡니다.  
- 경우에 따라 **그 부모보다 더 상위 컴포넌트**에 두는 것도 가능합니다.  
- 적절한 컴포넌트를 찾지 못한다면, **새로운 컴포넌트를 만들어 상위 계층에 추가**하세요.

---

이전 단계에서 이 애플리케이션에는 두 가지 state가 있다는 것을 확인했습니다:

- 사용자의 **검색어 입력 값**  
- 체크박스의 **필터 여부 값**

이 두 state는 함께 작동하며, 여러 하위 컴포넌트에서 동시에 사용되므로  
**같은 위치(공통 부모)에 위치시키는 것이 가장 합리적**입니다.

> 관련된 여러 컴포넌트에서 함께 사용하는 state는 반드시 **공통 상위 컴포넌트**에 배치해야  
> 데이터 흐름이 깔끔하고 유지보수가 쉬워집니다.

---

## 🔍 State를 사용하는 컴포넌트를 찾아보기

이제 state를 실제로 사용하는 컴포넌트를 살펴봅시다.

- `ProductTable`은 **검색어**와 **체크박스의 값**에 기반해  
  **상품 리스트를 필터링**해야 합니다.
  
- `SearchBar`는 사용자가 입력한 **검색어**와 **체크박스 상태를 표시**해야 합니다.

---

### 🔗 공통 부모는?

이 두 컴포넌트가 공유하는 **가장 가까운 부모 컴포넌트**는 바로  
`FilterableProductTable`입니다.

---

### 📌 결론

따라서, **검색어**와 **체크박스의 값**이라는 두 가지 state는  
`FilterableProductTable` 컴포넌트 내부에 위치시켜야 합니다.

> 공통 부모 컴포넌트에 state를 위치시키면  
> 하위 컴포넌트들이 props를 통해 효율적으로 데이터를 주고받을 수 있습니다.

---

---

## ⚙️ state를 컴포넌트에 실제로 추가하기

앞서 정리한 대로, `SearchBar`는 **검색어**와 **체크박스 값**을 표시해주고,  
`ProductTable`은 이 값들을 기준으로 **상품을 필터링**합니다.

두 컴포넌트의 **공통 부모**는 `FilterableProductTable`입니다.  
따라서, state는 이 컴포넌트 안에 위치해야 합니다.

---

### ✅ 결정 사항

- `FilterableProductTable` 컴포넌트에  
  **검색어와 체크박스의 값**을 **state로 추가**합니다.

---

### 🛠️ 구현 방법

React의 `useState()` **Hook**을 사용해 state를 정의합니다.

```jsx
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);
```

---

> useState는 React 컴포넌트에서 state를 선언할 수 있게 해주는 특별한 함수입니다.
> Hook은 React의 기능에 "연결(hook into)"할 수 있도록 도와줍니다.

---

---

## 🧩 FilterableProductTable에 state 추가하기

이제 `FilterableProductTable` 컴포넌트 상단에  
두 개의 state 변수를 정의하여 초기값을 명확하게 설정해줍니다.

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // ...
}
```

### 🔁 props로 state 전달하기
filterText와 inStockOnly 값을 하위 컴포넌트인
SearchBar와 ProductTable에 props로 전달해 줍니다.

```jsx
return (
  <div>
    <SearchBar 
      filterText={filterText}
      inStockOnly={inStockOnly}
    />
    <ProductTable 
      products={products}
      filterText={filterText}
      inStockOnly={inStockOnly}
    />
  </div>
);

```

> 이렇게 하면 하위 컴포넌트들은 부모 state 값을 읽을 수 있으며,
> 필요에 따라 콜백 함수로 값을 변경하도록 설정할 수도 있습니다.

---
---

## 🔄 역 데이터 흐름 추가하기

현재 `filterText`는 단순히 읽기 전용으로 사용되고 있기 때문에,  
**input의 value는 변경되지 않으며 화면도 갱신되지 않습니다.**

---

### ✅ 우리가 원하는 동작

사용자가 **input을 변경할 때마다**,  
입력값이 반영되어 **state가 업데이트**되기를 원합니다.

---

### 🧠 해결 방법

- 현재 `state`는 `FilterableProductTable`이 소유하고 있습니다.
- 이 state를 변경하려면,  
  `setFilterText`와 `setInStockOnly` 함수를 호출해야 합니다.

---

### 🔗 함수 전달하기

`SearchBar` 컴포넌트가  
`FilterableProductTable`의 state를 업데이트할 수 있으려면,  
**이 두 setter 함수를 `props`로 SearchBar에 전달해야 합니다.**

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
```

---

# 5월 8일 강의내용

<h1>202130413 신민수</h1>

## 📌 React로 사고하기

---

### 💭 React를 이용한 활용

React를 사용하면, 우리가 UI를 설계하고 사고하는 방식 자체가 달라집니다.

---

#### ✅ 핵심 요약

- React에서는 UI를 **컴포넌트(component)**라는 독립적인 조각으로 나눕니다.
- 각 컴포넌트는 **다양한 시각적 상태(visual states)**를 가질 수 있습니다.
- 컴포넌트 간에는 **데이터가 흐르며 상호작용**합니다.

---

#### 🎯 React 개발 방식

- UI는 **작은 컴포넌트 단위로 분해**됩니다.
- 이 컴포넌트들을 조합하여 전체 App이 구성됩니다.
- 데이터는 **부모 → 자식 방향으로 전달(props)**되고, 상태(state)는 **필요한 컴포넌트 내부에서 관리**됩니다.

---

### 📘 예제 목표

이 자습서에서는 **검색 가능한 상품 테이블**을 만드는 과정을 통해  
React 컴포넌트들이 어떻게 함께 작동하는지를 배워봅니다.

> React는 컴포넌트 기반(Component-Based)으로 UI를 구성합니다.  
> 이 장에서는 작은 컴포넌트들이 모여 전체 App으로 완성되는 과정을 체계적으로 살펴봅니다.

---

### 🧩 Step 1: UI를 컴포넌트 계층으로 쪼개기

React 앱을 만들기 위해서는 먼저 UI를 **논리적인 컴포넌트 단위로 나누는 것**이 중요합니다.

---

#### ✅ 핵심 요약

- 먼저, **모의 시안(Mockup)**에서 모든 컴포넌트와 하위 컴포넌트를 구분하세요.
- 각 컴포넌트 주위에 **박스를 그리고 이름을 붙이는 것**부터 시작합니다.
- 디자이너가 있다면, 디자인 툴에 이미 컴포넌트 이름이 명시되어 있을 수 있습니다. **확인해보세요!**

---

#### 💡 컴포넌트를 나누는 기준

**관점에 따라 컴포넌트를 나누는 방식은 다를 수 있습니다:**

##### 👨‍💻 프로그래밍 관점 (함수/객체 지향)

- 새로운 함수나 객체를 만드는 것처럼 컴포넌트를 정의합니다.
- **단일 책임 원칙(SRP)**을 따르는 것이 이상적입니다.  
  → 하나의 컴포넌트는 **하나의 역할만 수행**해야 합니다.
- 컴포넌트가 너무 커지면 **작은 하위 컴포넌트로 분해**하세요.

#### 🎨 CSS 관점 (스타일링 중심)

- CSS의 클래스 선택자를 무엇으로 만들지 고민하면서 **시각적 기준**으로 나눌 수 있습니다.
- 단순히 시각적 구조를 기준으로도 컴포넌트를 나눌 수 있으며, 이는 스타일링과도 밀접합니다.

---

> 컴포넌트를 명확히 나누는 것이 나중에 재사용성과 유지보수성을 높이는 핵심입니다!

---

## 🧩 Step 1: UI를 컴포넌트 계층으로 쪼개기

React 앱을 만들기 위해서는 먼저 UI를 **논리적인 컴포넌트 단위로 나누는 것**이 중요합니다.

---

### ✅ 핵심 요약

- 먼저, **모의 시안(Mockup)**에서 모든 컴포넌트와 하위 컴포넌트를 구분하세요.
- 각 컴포넌트 주위에 **박스를 그리고 이름을 붙이면서 시작**해 보세요.
- 디자이너와 협업 중이라면, **디자인 툴**에 이미 컴포넌트 이름이 정해져 있을 수도 있습니다.  
  👉 꼭 한 번 여쭤보세요!

---

### 💡 컴포넌트를 나누는 다양한 관점

컴포넌트를 나누는 기준은 개인의 **배경(디자인 vs 개발)**에 따라 달라질 수 있습니다:

---

#### 👨‍💻 Programming 관점

- **새로운 함수나 객체**를 만드는 것과 비슷한 방식으로 생각해 보세요.
- **단일 책임 원칙(Single Responsibility Principle)**을 적용한다면,  
  → 하나의 컴포넌트는 **한 가지 역할만** 수행해야 합니다.
- 컴포넌트가 점점 커진다면, **더 작은 하위 컴포넌트**로 쪼개는 것이 좋습니다.

---

#### 🎨 CSS 관점

- 스타일링을 담당한다면, **어떤 클래스 선택자**를 만들지 생각해 보세요.
- 실제 컴포넌트는 **CSS 클래스보다 좀 더 세분화**되어 있는 경우가 많습니다.

---

#### 🧱 Design 관점

- UI 구조에 따라 **디자인 계층을 어떻게 나눌지** 고민해 보세요.
- 디자이너가 설정한 시각적 구성 요소를 **재사용 가능한 단위로 쪼개는 것**이 핵심입니다.

---

> 개발자든 디자이너든, 목적은 명확합니다:  
> **유지보수 가능하고 재사용 가능한 구조를 만들기 위한 컴포넌트 분해!**

---

---

## 🧩 Step 2: UI를 컴포넌트로 쪼갠 계층을 수정

UI를 쪼개는 작업은 종종 **데이터 구조를 기반으로** 더 쉽게 진행할 수 있습니다.

---

### ✅ 핵심 요약

- **JSON 데이터가 잘 구조화**되어 있다면, 이는 UI의 컴포넌트 구조에도 그대로 반영될 수 있습니다.
- 이유는 단순합니다:  
  **UI와 데이터 모델은 대부분 같은 정보 구조(Information Architecture)**를 따르기 때문입니다.
- 따라서, UI를 구성할 때는 **데이터와 매칭되는 컴포넌트 구조**를 설계하세요.

---

### 💡 예시: 컴포넌트 생성 여부 판단 기준

예를 들어 `ProductTable` 컴포넌트를 보면,  
"Name"과 "Price" 레이블이 있는 **테이블 헤더 전용 컴포넌트**는 따로 만들지 않았습니다.

- 이유: 이 헤더는 단순하므로 굳이 컴포넌트로 분리하지 않아도 됩니다.
- 하지만 **정렬 기능** 등 추가 기능이 들어간다면?  
  👉 `ProductTableHeader`와 같은 **독립 컴포넌트로 분리하는 것이 더 적절**합니다.

---

### 🧱 계층 구조로 정리하기

이제 전체 UI의 **컴포넌트 계층 구조**를 정리해보겠습니다.

#### 📦 최상위 컴포넌트

- `FilterableProductTable`: 모든 컴포넌트를 포함하는 최상위 래퍼
- `SearchBar`: 검색 입력 필드와 체크박스 UI 제공
- `ProductTable`: 상품 테이블 렌더링
- `ProductCategoryRow`: 상품 카테고리별 제목 표시
- `ProductRow`: 개별 상품 항목 표시

---

> 이처럼, **기능 단위로 UI를 쪼개고**, 계층 구조로 정리하면 유지보수와 확장이 훨씬 쉬워집니다.

---

---

## 🛠️ Step 2: 정적인 버전 구현하기

컴포넌트 계층 구조가 준비되었으니, 이제 실제 UI를 구현해볼 시간입니다.

---

### ✅ 핵심 요약

- 먼저 **상호작용 없는 정적인 버전**을 만들어 UI 구조를 구축합니다.
- **데이터 모델을 기반으로** 컴포넌트들을 화면에 렌더링하는 데 집중하세요.
- 이후 단계에서 **상호작용 기능(state)**을 추가하게 됩니다.

---

### 💡 정적인 버전을 먼저 만드는 이유

- 정적인 버전은 **타이핑이 많지만, 생각할 것이 적습니다.**
- 반대로 상호작용 기능을 추가할 때는 **타이핑은 적지만, 더 많은 사고와 설계가 필요**합니다.

---

### 📦 구현 전략

1. **데이터를 props로 전달하며** 컴포넌트 구성하기
2. **state는 사용하지 않습니다**  
   → 지금은 "변하지 않는" 정적인 데이터를 화면에 그리기만 합니다.

---

### 🧱 Props 전달 방식

```txt
부모 컴포넌트 → 자식 컴포넌트로 props를 통해 데이터 전달
```

---

### 🧭 구현 순서 전략
🡻 하향식 (Top-down)
- 최상위 컴포넌트부터 시작해서 하위 컴포넌트를 **하나씩** 구현

> 예: FilterableProductTable → SearchBar / ProductTable → …

- 🡹 상향식 (Bottom-up)
- 가장 작은 단위인 하위 컴포넌트부터 시작

> 예: ProductRow → ProductCategoryRow → ProductTable → …

🔹 예제가 단순하면 상향식이 쉽고 빠릅니다.
🔸 프로젝트가 복잡할수록 하향식 구조 + 테스트 기반 **개발이 유리**합니다.

---

## 🛠️ Step 2: 정적인 버전 구현하기

앞서 만든 컴포넌트 계층 구조를 바탕으로, 실제 UI를 구현해 봅니다.  
이 단계에서는 **상호작용 없이 정적인 데이터만을 이용해 UI 구조를 설계**합니다.

---

### ✅ 핵심 목표

- 데이터 모델을 기반으로 UI를 렌더링하는 **정적인 컴포넌트 구성**
- props만 사용하고, **state는 아직 사용하지 않음**
- 계층 구조에 따라 top-down 또는 bottom-up 방식으로 개발 가능

---

## 📦 프로젝트 초기 세팅

### 1️⃣ 불필요한 파일 정리

- `src/` 폴더에서 아래 파일을 삭제합니다:
  - `logo.svg`
  - `setupTests.js` 등 테스트 관련 파일

### 2️⃣ App.js 초기화

`App.js` 내용을 아래처럼 초기화해 주세요:

```jsx
// src/App.js
export default function App() {
  return (
    <>
      <h1>My React App</h1>
    </>
  );
}
```

## 🗂️ 정적 데이터 추가
 > App.js 파일 아래쪽에 데이터를 정의합니다:

 ```jsx
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
```

**이 데이터는 이후 각 컴포넌트에 props로 전달되어 화면에 표시됩니다.**

### 🧩 컴포넌트 설계 시작
- 최상위 컴포넌트 구조
- 이제 FilterableProductTable 컴포넌트를 구현할 준비가 되었습니다.

> 컴포넌트 계층 구조는 다음과 같습니다:

```txt
FilterableProductTable
├── SearchBar
└── ProductTable
    ├── ProductCategoryRow
    └── ProductRow

```

> FilterableProductTable은 전체 구조를 관리하며, 하위 컴포넌트에 데이터를 전달합니다.


---

---

[👉 React 실습 전체 흐름 보기](https://gptonline.ai/ko/)

---

## 🔄 Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기

정적인 UI를 완성했다면, 이제는 **사용자와 상호작용할 수 있는 동적인 상태(state)**를 구현할 차례입니다.

---

### ✅ 핵심 목표

- **UI를 상호작용 가능하게 만들기 위해서는 상태(State)**가 필요합니다.
- 사용자의 입력이나 동작에 따라 **기반 데이터 모델이 변화**해야 합니다.
- React에서 이런 변화를 **state를 통해 관리**할 수 있습니다.

---

### 📌 핵심 개념: 상태란 무엇인가?

- `state`는 앱이 **기억해야 하는 변경 가능한 데이터**입니다.
- 예: 체크박스 상태, 입력창 텍스트, 정렬 기준 등
- **정적인 데이터는 props로, 변화하는 데이터는 state로** 관리합니다.

---

### 🔁 Don't Repeat Yourself 원칙 (중복 배제)

- state는 **최소한의 필수 데이터만 저장**해야 합니다.
- 나머지 정보는 state에서 **계산하거나 유도(derive)**할 수 있습니다.

---

### 💡 예시: 쇼핑 리스트

```jsx
// ❌ 잘못된 예시
const [itemCount, setItemCount] = useState(5); // 중복 데이터

// ✅ 올바른 접근
const [items, setItems] = useState(["사과", "바나나", "수박"]);
const itemCount = items.length; // 필요할 때 계산
```

> itemCount는 items.length로 유도할 수 있기 때문에 state로 가질 필요가 없습니다.
> 이런 방식으로 중복을 줄이고, 상태를 단순화하세요.

---


# 4월 18일 강의내용

## 📌 State 끌어올리기 ver.2
---

## ⏳ 시간 여행 기능 준비하기

이제 우리는 게임의 과거 상태를 저장하고,  
원하는 시점으로 "되돌아가기" 기능을 구현하려고 합니다.

---

### ✅ 핵심 요약

- `history` 배열에는 게임의 **모든 이전 상태(`squares`)**가 저장됩니다.
- `map()` 함수를 사용해 `history`의 각 요소와 인덱스를 순회하며 **무브 리스트**를 생성합니다.

---

### 🎯 각 무브에 대해:

- `move === 0`이면 → `"Go to game start"`
- `move > 0`이면 → `"Go to move #n"`

이 텍스트는 `description` 변수에 저장됩니다.

- `onClick` 이벤트로 각 버튼을 클릭 시 해당 무브로 이동하도록 구현됩니다.
- `map()` 내부에서는 `move` 인덱스를 활용하여 해당 상태의 `squares`를 참조합니다.

- 버튼 JSX 요소들은 `moves` 배열에 저장되며, 이후 렌더링됩니다.

---

### 💡 코드 개요 예시

```jsx
const moves = history.map((squares, move) => {
  const description = move > 0
    ? `Go to move #${move}`
    : 'Go to game start';

  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```

---

---

## 📘 보충 설명: map과 history.map의 구조 이해

> 문서 번역이 다소 어렵게 느껴질 수 있으므로,  
> `history.map((squares, move) => {})` 구문을 다시 자세히 정리해보겠습니다.

---

### 🧱 map 함수 기본 구조

- 기본 구문:  
  `array.map(callbackFn)`  
  또는 `array.map(callbackFn, thisArg)`

- 여기서 `thisArg`는 `this`의 바인딩을 지정할 때 사용되며,  
  **화살표 함수에서는 생략**됩니다.

- 예제에서는 오직 `callbackFn`만 사용하며,  
  `map()`의 인자로 들어간 화살표 함수는 **콜백 함수의 대체**입니다.

```js
const moves = history.map((squares, move) => { ... });
```

---

## 📘 보충 개념: map 함수의 사용 정리

> 지금까지 설명한 `history.map((squares, move) => { ... })` 구문을 예시와 함께 다시 정리합니다.

---

### 🔄 map의 구성 요소

- **원본 배열(history)**: `map()`이 호출된 대상 배열입니다.
- **인덱스(move)**: 현재 순환 중인 요소의 인덱스 번호입니다.
- **값(squares)**: 현재 순환 중인 요소의 실제 값입니다.

---

### 📌 map 함수의 실제 동작 예시

```js
const moves = history.map((squares, move) => { ... });
```

> 예를 들어 `History` 배열이 다음과 같은 상태라면

```js
history = [
  [null, null, null, null, null, null, null, null, null],        // move = 0
  ['X', null, null, null, null, null, null, null, null],         // move = 1
  ['X', 'O', null, null, null, null, null, null, null]           // move = 2
];
```

> 이때 `Map`은 다음과 같이 반복됩니다
- **순번	squares 값	move 값**
- *1	[null, null, ...]	0*
- *2	['X', null, ...]	1*
- *3	['X', 'O', null, ...]	2*

---

---

## 🔑 보충 개념: React에서 key 선택하기

리스트를 렌더링할 때, React는 각 항목을 식별하기 위해 `key`라는 속성을 사용합니다.  
`key`는 각 요소가 어떤 항목인지 구분하기 위한 **고유 식별자 역할**을 합니다.

---

### 📋 리스트 렌더링 시 React의 동작 방식

- React는 렌더링 후 **각 리스트 항목에 대한 정보를 저장**합니다.
- 리스트가 업데이트되면 **무엇이 변경되었는지** 판단해야 합니다.
- 항목은 **추가, 삭제, 재정렬, 업데이트**될 수 있습니다.

---

### 🧩 예시

```html
// 변경 전
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>

// 변경 후
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

> 개발자의 의도: `task` 수만 바뀐 것
> React의 판단: 순서가 바뀌고 `새로운 항목이 추가된 것`으로 인식

---

## ⚠️ 왜 문제가 될까?
React는 컴퓨터 프로그램이기 때문에, 사람의 의도를 추론하지 못합니다.

우리는 단순히 `task` 수가 바뀌었다고 생각하지만,
React는 항목이 `통째로` 바뀌었다고 판단할 수 있습니다.

✅ 해결책: key 속성 사용
key는 리스트에서 각 항목을 `고유하게 식별할 수 있는 값`으로 지정해야 합니다.

이를 통해 React는 어떤 항목이 같은 항목인지, 어떤 항목이 새로 추가되었는지 정확히 파악합니다.
```jsx
<li key={user.id}>Alexa: 7 tasks left</li>
```
> 항상 리스트 렌더링 시 고유한 `Key` 지정을 잊으면 안된다

---

## 🔄 key가 컴포넌트에 미치는 영향

- 리스트가 다시 렌더링되면 React는 **현재 리스트의 key**와  
  **이전 리스트의 key**를 비교합니다.

#### 상황별 작동 방식:

1. 현재 리스트에 **없던 key가 추가** → 새 컴포넌트 생성  
2. 이전에는 있었지만 **현재는 없는 key** → 컴포넌트 제거  
3. **key가 동일** → 컴포넌트 재사용 및 이동 처리

---

### 🎯 key가 중요한 이유

- React는 key를 기준으로 **컴포넌트를 식별**합니다.
- 컴포넌트를 다시 렌더링할 때 **key가 같으면 기존 state 유지**  
- key가 달라지면 **기존 컴포넌트 제거 + 새 컴포넌트 생성**

> 컴포넌트의 상태(state)를 유지하려면 key를 **일관성 있게 관리**하는 것이 중요합니다.

---

# 4월 17일 강의내용

## 📌 State 끌어올리기

## 📁 시도해보기.

- `handleClick` 함수는 **JavaScript의 `slice()` 배열 메서드**를 사용하여 `squares` 배열의 사본인 `nextSquares`를 생성합니다.  
  (📚 참고 : [developer.mozilla.org](https://developer.mozilla.org))

- 그 다음 `handleClick` 함수는 `nextSquares` 배열의 첫 번째 `Squares(index [0])`에 `X`를 추가하여 업데이트합니다.

- `setSquares` 함수를 호출하면 **React는 컴포넌트의 `state`가 변경되었음을 감지**합니다.

- 그러면 `squares`의 `state`를 사용하는 컴포넌트(`Board`)와 그 하위 컴포넌트(보드를 구성하는 `Square` 컴포넌트)가 **다시 렌더링** 됩니다.

---

### 💡 중요한 포인트

> 이 설명은 문서의 코드 중 **`Board`가 `Square`를 포함하고 있음을 전제**합니다.

- JavaScript는 **클로저(Closure)**를 지원하기 때문에 내부 함수가(`handleClick`) 외부 함수(`Board`)에 정의된 변수 및 함수에 접근할 수 있습니다.

- `handleClick` 함수는 `squares`의 `state`를 읽고 `setSquares` 메서드를 호출할 수 있는데,  
  **이 함수는 `Board` 함수 내부에 정의되어 있기 때문입니다.**

---

## 🔁 모든 Square 업데이트하기

- 이제 보드에 X를 추가할 수 있게 되었지만 가능한 건 **오직 왼쪽 위 Square 뿐**입니다.

- `handleClick` 함수는 **왼쪽 위 `Square(index 0)`만 업데이트**하도록 하드코딩되어 있습니다.

- **모든 사각형을 업데이트할 수 있도록** `handleClick` 함수를 수정하겠습니다.

---

### ✍️ 구현 과제

9. `handleClick` 함수에 **업데이트할 `Square`의 `index`를 나타내는 인수 `i`**를 추가하세요.

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  );
}
```

---

## 🔁 함수 실행이 아닌 참조 전달하기

- 이제 `handleClick`에 **직접 인수를 전달하지 않고, 함수 참조로 넘기는 방법**을 배워야 합니다.

- 다음과 같이 **콜백 함수 형태**로 작성하면, `handleClick`이 즉시 실행되지 않고 클릭 시에만 실행됩니다.

```jsx
<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

> ✅ 이 방법이 올바른 이유

- () => `handleClick(0)`는 새로운 함수를 생성하며, 해당 함수는 `클릭 이벤트가 발생할 때`까지 `실행되지 않습니다`.

- 이 방식은 `handleClick`의 실행을 렌더링 시점이 아닌, 클릭 이벤트 시점으로 미루게 됩니다.

- 결과적으로 무한 루프 없이 안전하게 원하는 `index`의 `Square`만 업데이트할 수 있습니다.

> 🧠 이처럼 렌더링 시 실행되는 코드와 이벤트 핸들러로 실행되는 코드를 명확히 분리하는 것은 `React`에서 매우 중요한 개념입니다.

---

## 🔁 상위 컴포넌트에서 state 관리하기

- 이제 `Board`가 모든 `state`를 관리하므로, **부모 `Board` 컴포넌트는 자식 `Square` 컴포넌트가 올바르게 표시될 수 있도록 `props`를 전달**합니다.

- `Square`를 클릭하면, 자식 `Square` 컴포넌트가 **부모 `Board` 컴포넌트에 `Board`의 `state` 업데이트**를 요청하게 됩니다.

- `Board`의 `state`가 변경되면, **`Board` 컴포넌트와 모든 자식 `Square` 컴포넌트가 자동으로 다시 렌더링** 됩니다.

- `Board` 컴포넌트에 속한 모든 `Square`의 `state`를 유지하면, **나중에 승자를 판단하는 로직을 쉽게 구현할 수 있습니다.**

---

## 🔁 클릭 시 상태 변경 흐름 정리하기

- 사용자가 `Board`의 **왼쪽 위 사각형을 클릭**하여 `X`를 추가하면 어떤 일이 발생하는지 **다시 한 번 정리**해 보겠습니다.

### 🧭 흐름 정리

1. **왼쪽 위 사각형**을 클릭하면 `button`이 `Square`로부터 받은  
   `onClick prop`의 함수가 실행됩니다.
   - `Square` 컴포넌트는 `Board`에서 해당 함수를 `onSquareClick props`로 전달받았습니다.
   - `Board` 컴포넌트는 JSX에서 직접 이 함수를 정의했습니다.
   - 이 함수는 `0`을 인수로 `handleClick`을 호출합니다.

2. `handleClick`은 인수 `0`을 사용하여 `squares` 배열의  
   첫 번째 요소(`null`)를 `"X"`로 업데이트합니다.

3. `Board` 컴포넌트의 `squares state`가 업데이트되어,  
   `Board`와 모든 자식 `Square` 컴포넌트가 다시 렌더링됩니다.
   - 이때 index가 `0`인 `Square`의 `value prop`이 `null`에서 `"X"`로 변경됩니다.

4. 최종적으로 **사용자는 왼쪽 위 사각형을 클릭한 후,  
   비어 있던 사각형이 `"X"`로 변경된 것을 확인하게 됩니다.**

---

## 🔁 사용자 정의 컴포넌트의 이벤트 prop 이해하기

> 💡 중요합니다!

- DOM `<button>` 엘리먼트의 `onClick` 속성은 **빌트인 컴포넌트이기 때문에,  
  React에서는 특별한 의미를 가집니다.**

- **사용자 정의 컴포넌트**(예: `Square`)의 경우,  
  prop의 이름은 사용자가 원하는 대로 자유롭게 지정할 수 있습니다.

- 예를 들어 `Square`의 `onSquareClick` prop이나 `Board`의 `handleClick` 함수에  
  어떤 이름을 붙여도 **동일하게 작동**합니다.

---

### ✅ React의 관례

- React에서는 주로 **이벤트를 나타내는 prop**에는 `onSomething` 같은 이름을 사용하고,  
  **이벤트를 처리하는 함수**는 `handleSomething` 같은 이름을 사용합니다.

예시:
- `onClick`, `onChange`, `onSubmit` 등은 props
- `handleClick`, `handleChange`, `handleSubmit` 등은 함수 이름

---

## 🧊 10단계: 불변성이 왜 중요할까요?

- `handleClick`에서는 기존 배열을 수정하는 대신, `slice()`를 호출하여  
  `squares` 배열의 **사본을 생성하는 방식**에 주목하세요.

- 그 이유를 설명하기 위해 **불변성과 그 중요성**에 대해 알아봅니다.

---

### 🔁 데이터를 변경하는 두 가지 방법

1. **데이터를 직접 변경**하여 값을 수정하는 방식  
2. **변경 사항이 있는 새 복사본**으로 데이터를 대체하는 방식 (React에서 선호)

---

### ❌ 직접 변경 예시

```jsx
const squares = [null, null, null, null, null, null, null, null, null];
squares[0] = 'X';
// Now `squares` is ["X", null, null, null, null, null, null, null, null];
```
> 복사 후 대체 예시

```jsx
const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];
// Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`
```

---

## 🚀 불변성이 주는 실제적인 이점

- 최종 결과는 같지만, **원본 데이터를 직접 변경하지 않음으로써** 여러 가지 이점을 얻을 수 있습니다.

---

### 🔎 왜 불변성이 중요한가요?

1. **복잡한 기능을 더 쉽게 구현할 수 있습니다.**

   - 불변성을 유지하면 상태 변경 내역을 추적하거나 롤백하는 기능을 만들기 수월해집니다.

2. 예를 들어, **"시간 여행" 기능**을 구현할 수 있습니다.

   - 우리는 이후 단계에서 게임의 진행 과정을 기록하고,  
     과거 상태로 "되돌아가기"를 구현할 예정입니다.

3. **실행 취소 및 재실행 기능**은 게임에만 국한된 것이 아니라,  
   다양한 앱에서 요구되는 일반적인 기능입니다.

4. **기존 데이터를 그대로 유지**하면,  
   언제든지 이전 버전으로 재사용하거나 초기화할 수 있습니다.

---

## ⚙️ 불변성과 렌더링 최적화

2. **불변성을 사용하면 또 다른 중요한 장점**도 있습니다.

---

### 🧠 성능 관점에서의 이점

- 기본적으로 **부모 컴포넌트의 `state`가 변경되면,  
  모든 자식 컴포넌트가 자동으로 다시 렌더링**됩니다.

  - 이때 변경 사항이 없는 자식 컴포넌트도 포함됩니다.

- **리렌더링 자체는 사용자에게 보이지 않지만**,  
  성능 최적화를 위해 **불필요한 렌더링은 피하는 것이 좋습니다.**

---

### ✅ 불변성이 성능에 미치는 영향

- 불변성을 지키면 컴포넌트가 **데이터의 변경 여부를  
  저렴한 비용으로 판단**할 수 있습니다.

- React는 이러한 구조를 바탕으로 **렌더링 최적화 기능**을 제공합니다.

> 참고: `memo` API를 사용하면 React가 컴포넌트를  
  **언제 다시 렌더링할지 선택하는 방법**을 설정할 수 있습니다.

---

## 🎮 교대로 두기 - X와 O 표시하기 (1)

- 지금까지 만든 틱택토 게임에서 가장 큰 문제였던  
  **"O"를 보드에 표시할 수 없던 문제**를 해결해보겠습니다.

  > 해결된 코드(완성된 코드)

```jsx
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    // ...
  );
}
```

---

### ⚙️ 첫 번째 선수 설정 및 상태 관리

1. **첫 번째 선수가 두는 말을 `"X"`로 설정**합니다.  
   이제 `Board` 컴포넌트에 **또 다른 state**를 추가해 추적할 수 있습니다.

```jsx
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // ...
}
```

## ⛔ 이미 채워진 사각형은 무시하기

- 이제 다른 사각형을 클릭하면 `"X"`와 `"O"`가 **정상적으로 번갈아 표시**됩니다.

---

### ❗ 새로운 문제 발견

- **같은 칸을 여러 번 클릭해 보세요.**
- `"O"`가 `"X"`를 덮어쓰는 상황이 발생합니다!
- 물론 게임을 흥미롭게 만들 순 있지만, 지금은 **기본 규칙**을 유지하겠습니다.

---

### 🔍 문제 원인

- 현재 로직은 `"X"` 또는 `"O"`를 사각형에 표시할 때,  
  **해당 칸이 이미 채워졌는지를 확인하지 않고 있습니다.**

---

### ✅ 해결 방법

> 클릭된 사각형에 값이 이미 있는 경우에는 아무 작업도 하지 않고 종료하면 됩니다.

1. `handleClick` 함수에서, 사각형(`squares[i]`)이 이미 채워졌는지 확인합니다.
2. 값이 존재한다면 `return`하여 **함수 실행을 중단**합니다.

```jsx
function handleClick(i) {
  if (squares[i]) {
    return;
  }

  const nextSquares = squares.slice();
  // 이후 로직 진행...
}
```

---

## 📌 보충 개념: `return`의 의미

- 작성한 코드에는 `return` 값이 없습니다.

```js
if (squares[i]) {
  return;
}

```
---

## 🏆 승자 결정 함수 추가하기

- 이제 어느 플레이어의 차례인지 표시하는 것 외에도,  
  **게임의 승자가 결정되었을 경우 더 이상 차례를 만들 필요가 없습니다.**

---

### 🧮 승자 확인을 위한 함수 추가

- 9개의 사각형 배열을 가져와서 **승자를 판별**하는 함수  
  `calculateWinner`를 추가합니다.

- 이 함수는 `"X"`, `"O"`, 또는 `null` 값을 반환합니다.

- 걱정 마세요! `calculateWinner` 함수는 React 전용이 아니며,  
  **일반적인 JavaScript 도우미 함수(helper function)**입니다.

---

### ⚙️ 위치는 어디에 정의해야 하나요?

- `calculateWinner` 함수는 **`Board` 함수 바깥에 정의하거나 안에 정의해도 상관없습니다.**

- 이 예제에서는 **컴포넌트를 편집할 때 불편하지 않도록 파일의 하단에 배치**하겠습니다.

```js
// 예시 위치
function calculateWinner(squares) {
  // ...
}

```

---
---

## 🧩 보충 개념: 구조 분해 할당 (Destructuring Assignment)

> 구조 분해 할당은 **배열이나 객체의 값을 개별 변수로 쉽게 추출하는 방법**입니다.

---

### 📘 개념 요약

- **비구조화 할당** 또는 **구조화 할당**이라고도 불리며,  
  JavaScript에서 매우 자주 사용되는 문법입니다.

- 배열이나 객체의 구조를 해체하여, **내부 값들을 개별 변수에 할당**할 수 있습니다.

- 이를 통해 **코드의 간결성과 가독성**을 높일 수 있습니다.

---

### 📦 배열의 구조 분해 예시

```js
const pairs = [
  [1, 2],
  [3, 4],
  [5, 6]
];

pairs.map(([x, y]) => {
  console.log(`x: ${x}, y: ${y}`);
});

```

> 🗂️ 객체의 구조 분해 예시

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

users.map(({ id, name }) => {
  console.log(`${id}: ${name}`);
});
```


# 4월 10일 강의내용

## 📌 보드 만들기

### 📦 React에서 props를 통해 데이터 전달하기

> 이 문서는 React의 기본 개념 중 하나인 `props`를 통해 컴포넌트 간 데이터를 전달하는 과정을 설명합니다.  
> 재사용 가능한 구조로 코드를 개선하는 데 중점을 둡니다.

---

### 📁 1단계: 컴포넌트 구조 개선하기

- **React의 component architecture**를 사용하여 **재사용 가능한 component**를 생성합니다.
- 불필요하고 **중복된 코드를 제거**합니다.

#### 🛠️ 작업 순서

1. `Board` component를 만들고, `Square` component의 내용을 복사합니다.
2. `Square` component의 `button`을 하나만 남기고 모두 삭제합니다.
3. `Board` component의 `button`을 `Square` component로 교체합니다.
4. `App`에서 호출하는 component를 `Square`에서 `Board`로 변경합니다.
5. 정상적으로 출력이 되는지 확인합니다.

> ✅ 이렇게 하면 구조는 깔끔해지지만, **숫자 출력이 1만 나오게 됩니다.**

---

### 📌 2단계: props를 사용한 데이터 전달

- 이제 **props를 사용하여 값 전달**을 구현하겠습니다.
- 부모 컴포넌트인 `Board`에서 자식 컴포넌트인 `Square`로 값을 넘겨줘야 합니다.

#### ✅ Square 컴포넌트 수정

```jsx
function Square({ value }) {
  return <button className="square">1</button>;
}
```

---

### 🧩 사용자와 상호작용하는 컴포넌트 만들기

> 🛑 한글 문서에서 "사각형"이라고 번역된 것은 모두 **Square 컴포넌트**를 의미합니다.

이제 사용자와의 상호작용을 위해 **Square 컴포넌트를 클릭할 수 있도록** 코드를 수정해보겠습니다.

#### ✍️ 구현 순서

1. `Square` 내부에 `handleClick` 함수를 선언하세요.
2. JSX에서 반환되는 버튼에 `props`로 `onClick` 이벤트를 연결합니다.

#### 💻 예시 코드

```jsx
function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🔁 상태 기억: 사용자와 상호작용하는 컴포넌트 만들기 (2)

> 이번에는 사각형을 클릭했을 때 **'기억'** 하도록 만들어, "X"나 다른 값으로 표시되게 하겠습니다.

### 🧠 상태 저장의 개념

- 컴포넌트는 무언가를 기억하기 위해 `state`를 사용합니다.
- React는 상태 기억을 위해 `useState`라는 **Hook**을 제공합니다.
- 이제 `Square` 컴포넌트의 현재 값을 `state`로 저장하고, 클릭 시 상태가 변경되도록 하겠습니다.

---

### 🛠️ 구현 절차

1. 파일 상단에서 `useState`를 **import**합니다.
2. `Square` 컴포넌트에서 `value` prop을 제거합니다.
3. 대신 `useState`를 호출하여 내부 상태로 값을 관리합니다.

---

### 💻 예시 코드

```jsx
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    // 나중에 상태를 바꿔주는 로직 작성 예정
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🛠️ 상태 관리를 위한 리팩토링

### 📌 상태 변수와 설정 함수

- `value`는 **값을 저장하는 변수**,  
  `setValue`는 **값을 변경하는 함수**입니다.
- `useState(null)`의 의미는 **state 변수의 초기값이 null**이라는 뜻입니다.

### 🔄 props 제거하기

- 이제 `Square` 컴포넌트는 더 이상 `props`를 사용하지 않게 수정했습니다.
- 따라서 `Board` 컴포넌트에서 생성되는 9개의 `Square`에도 더 이상 `value` prop을 넘기지 않습니다.

---

### 💻 예시 코드: 변경된 Board 컴포넌트

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

---

## 🖱️ 클릭 시 X 표시되도록 만들기

> 이제 `Square` 컴포넌트를 클릭하면 **"X"가 출력**되도록 구현해보겠습니다.

### ✅ 변경 사항 요약

5. `console.log("clicked!")` 대신에  
   이벤트 핸들러를 `setValue("X")`로 변경합니다.

### 💻 변경된 Square 컴포넌트 코드

```jsx
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

## 🧱 각 컴포넌트의 독립적인 상태

> `Square` 컴포넌트 하나하나가 **고유한 state**를 갖고 있으며, 서로 영향을 주지 않도록 독립적으로 동작합니다.

### 🧩 핵심 개념 정리

- 각 **`Square`는 고유한 state**를 가지고 있습니다.
- 각 Square에 저장된 `value`는 **다른 Square와 완전히 독립적**입니다.
- 컴포넌트에서 `set` 함수를 호출하면, **React는 자동으로 해당 컴포넌트와 자식 컴포넌트를 업데이트**합니다.

### 🔄 결과적으로

- 하나의 `Square`를 클릭해 `"X"`를 표시해도,
- 다른 `Square`는 아무 영향도 받지 않고 **각자의 상태**만 유지하게 됩니다.

> 🎯 이는 React의 **컴포넌트 기반 아키텍처**와 **단방향 데이터 흐름**의 기본 구조를 이해하는 데 매우 중요한 부분입니다.

---

## 📤 state 끌어올리기 (Lifting State Up)

> 지금까지는 각 `Square` 컴포넌트가 자체적으로 `state`를 가지고 있었습니다.  
> 하지만 **게임 전체의 상태**를 관리하려면 더 상위 컴포넌트에서 상태를 관리해야 합니다.

### 🎯 왜 끌어올려야 하나요?

- 현재 각 `Square` 컴포넌트는 게임의 일부 상태만을 기억하고 있습니다.
- 틱택토(Tic Tac Toe) 게임에서 승자를 판단하려면,
  `Board`가 9개의 `Square`의 상태를 모두 알고 있어야 합니다.

---

### 🧠 접근 방식 비교

#### ❌ 방법 1: Board가 각 Square에게 state를 “요청”하는 방식

- 기술적으로는 React에서 구현 가능하지만...
  - **이해하기 어렵고**
  - **버그에 취약**하며
  - **리팩토링하기 어려운 구조**입니다.
- 따라서 **비추천되는 방식**입니다.

#### ✅ 방법 2: 게임의 state를 Board에 저장

- 가장 좋은 방법은 게임 상태를 `Square`가 아닌 **부모 컴포넌트인 `Board`에 저장**하는 것입니다.
- 그렇게 하면 `Board`가 상태를 관리하고, 각 `Square`에는 **props를 통해 값을 전달**하게 됩니다.

---

### 🔄 핵심 요약

| 항목 | 설명 |
|------|------|
| 현재 구조 | 각 Square가 개별 state 보유 |
| 개선할 구조 | Board가 전체 상태 보유, Square는 props만 사용 |
| 이점 | 승자 판단, 전체 흐름 관리, 유지보수 쉬움 |

> 🎯 다시 말해, 각 Square의 state를 "끌어올려" **부모 컴포넌트인 `Board`에서 중앙집중식으로 관리**하겠다는 의미입니다.

---

---

## 🗂️ component 분리하기

> 지금까지는 `Board`와 `Square`를 하나의 파일에 작성했지만, 이제 각각의 **컴포넌트를 독립된 파일로 분리**해보겠습니다.

### ⚠️ 분리 힌트

- `Board` 컴포넌트가 `export default`로 선언되어 있다는 건, **별도의 파일로 분리되었다는 의미**입니다.
- 우리도 이를 따라 **컴포넌트를 파일 단위로 정리**합니다.

---

### 🧱 컴포넌트 분리 순서

1. 컴포넌트 이름과 동일한 파일을 생성합니다.  
   예: `Board.js`, `Square.js`
2. 해당 파일로 코드를 복사하고 `export default`를 붙입니다.
3. 필요 시 `useState`, `React` 등을 import 합니다.
4. `App.js`에서 해당 코드를 삭제하고, `Board` 컴포넌트를 import 합니다.
5. `App.js`에서 `useState` import가 더 이상 필요 없다면 제거합니다.
6. 정상적으로 앱이 작동하는지 확인합니다.

---

### 📁 예시 디렉토리 구조

src/ ├── components/ │ ├── Board.js │ └── Square.js ├── App.js └── index.js
> ✅ 이처럼 컴포넌트를 분리하면 유지보수도 쉽고, 협업도 훨씬 효율적입니다.

---

## 🔼 state 끌어올리기 (2): Board가 상태를 관리하기

> 이제 `Board` 컴포넌트는 모든 `Square`의 상태를 하나로 모아서 관리합니다.  
> 그리고 각 `Square`에 **props를 통해 값(value)** 을 전달합니다.

### ✅ Board 컴포넌트 내부에서 state 정의

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
```

---

## 📥 state 끌어올리기 (3): Square는 props만 사용

> 이제 `Square`는 더 이상 상태를 관리하지 않고,  
> `Board`로부터 전달받은 `value prop`만 **표시 전용**으로 사용합니다.

---

### 📌 작업 요약

3. `Board` 컴포넌트에서 각 `Square`에 `value prop`을 전달합니다.  
4. `Square` 컴포넌트를 다음과 같이 수정하여 해당 `prop`을 받을 수 있도록 합니다:

```jsx
function Square({ value }) {
  return (
    <button className="square">
      {value}
    </button>
  );
}
```

---

## 🖱️ 클릭 이벤트 전달: 이벤트 핸들러 위임하기

> `Square` 컴포넌트는 클릭되었을 때 **자체적으로 처리하지 않고**,  
> 부모인 `Board`로부터 받은 `onSquareClick` 함수를 호출합니다.

---

### 🎯 목표

- `Board` → `Square`로 함수를 prop 형태로 전달
- `Square`에서 `onClick` 이벤트 시 해당 함수를 호출

---

### 💻 5단계: Square 컴포넌트 클릭 시 함수 호출

```jsx
function Square({ value }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```
> 위 코드엔 아직 오류가 있습니다. 

### 💻 6단계: props로 onSquareClick 추가

```jsx
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

---

## 🧭 상태 끌어올리기 (4): 클릭 핸들러 연결

> 이제 `Square`는 클릭 시 부모인 `Board`에서 정의한 `handleClick` 함수를 호출하게 됩니다.

---

### 💻 7단계: `onSquareClick` prop을 `handleClick`과 연결

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    // 클릭 시 상태 업데이트 로직 (다음 단계에서 구현)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        {/* 나머지 Square들도 동일하게 처리 */}
      </div>
    </>
  );
}
```

---

## 🔚 상태 끌어올리기 (5): handleClick로 상태 변경하기

> `Board` 컴포넌트 내에서 상태 배열 `squares`를 복사한 뒤, 특정 값을 변경하여 다시 업데이트합니다.

---

### 💻 8단계: handleClick 함수 작성

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();  // 기존 배열 복사 (불변성 유지)
    nextSquares[0] = "X";                 // 인덱스 0 위치에 "X" 설정
    setSquares(nextSquares);              // 상태 업데이트
  }

  return (
    // Square 컴포넌트들 렌더링
  );
}
```

# 4월 3일 강의내용 

## 📌 이벤트에 응답하고 화면 업데이트하기  

### 1. 이벤트 핸들러 선언

- 컴포넌트 내부에 **이벤트 핸들러 함수**를 선언하면 이벤트에 응답할 수 있습니다.
- 예시:

```jsx
function handleClick() {
  
}

<button onClick={handleClick}>Click me</button>
```

> `handleClick` 뒤에 소괄호 `()`가 없는 것에 주의!  
> (클릭될 때 실행되도록 함수를 **참조**만 전달)

---

### 2. 화면 업데이트하기

컴포넌트가 특정 정보를 **기억하고 표시**해야 할 때,  
예를 들어 버튼 클릭 횟수를 세고 싶다면 **state(상태)** 를 사용합니다.

---

#### 🔹 useState 소개

- React에서 상태 관리를 위해 `useState`를 사용
- `useState`는 React의 **Named Export**로 제공됨

```jsx
import { useState } from 'react';
```

---

#### 🔹 state 변수 선언 방법

```jsx
const [count, setCount] = useState(0);
```

- `count`: 현재 상태를 담는 변수
- `setCount`: 상태를 업데이트하는 함수

> ✅ 관용적으로 `[something, setSomething]` 형태로 작성합니다.

---

### 🧪 실습 예제

다음은 버튼 클릭 시 카운터가 증가하는 React 컴포넌트입니다.

```jsx
import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0); // 초기 상태는 0

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### ✅ 설명

- `useState(0)`으로 초기값 설정
- 버튼 클릭 시 `handleClick()` 실행 → `setCount()` 호출 → 상태 업데이트
- React가 변경된 상태를 기반으로 **자동으로 UI를 다시 렌더링**함

---

### 🔄 화면 업데이트 실습: CountState 컴포넌트

이번 실습에서는 **카운터 기능을 하나의 버튼만으로 구현**하고,  
불필요한 복잡성을 제거하여 `useState`에 집중할 수 있도록 구성합니다.

---

### 🎯 목표

- 버튼이 클릭될 때마다 숫자가 1씩 증가하는 기능 만들기
- `CountState.js`라는 파일 안에 컴포넌트를 정의하기

---

### 📁 파일: `CountState.js`

```jsx
import { useState } from 'react';

function CountState() {
  const [count, setCount] = useState(0); // 초기 상태: 0

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <button onClick={handleClick}>
      클릭 횟수: {count}
    </button>
  );
}

export default CountState;
```

---

### ✅ 설명 요약

- `useState(0)` → 컴포넌트가 처음 렌더링될 때 `count` 값은 `0`
- `setCount(count + 1)` → 상태 변경 함수로 새 값을 전달
- 버튼을 클릭하면 `handleClick()` 함수가 실행되어 `count`가 증가
- 버튼 하나만 렌더링되어 **코드가 간결**하고 `state` 학습에 집중 가능

---

> 🔔 다음 단계에서는 이 컴포넌트를 App.js 또는 메인 파일에서 불러와 사용하는 법을 이어서 작성할 예정입니다.

## Hook 사용하기

React에서는 `use`로 시작하는 함수를 **Hook**이라고 부릅니다.

---

### 🧩 대표적인 Hook: `useState`

- `useState`는 React에서 제공하는 **내장 Hook** 중 하나입니다.
- 이 외에도 다양한 내장 Hook이 있으며, [React 공식 API 문서](https://react.dev/reference/react)에서 확인할 수 있습니다.

---

### 🧪 사용자 정의 Hook (Custom Hook)

- 기존 Hook들을 조합하여 **나만의 Hook(Custom Hook)** 을 만들 수도 있습니다.
- 사용자 정의 Hook도 반드시 `use`로 시작해야 합니다.  
  예: `useMyCustomHook()`

---

### ⚠️ Hook의 제약사항

Hook은 일반 함수처럼 **아무 데서나 사용할 수 없습니다.**  
다음 규칙을 꼭 따라야 합니다:

1. **컴포넌트 함수의 최상단에서만 사용 가능**
2. **조건문이나 반복문 안에서는 사용 불가**

> ✅ 조건문이나 반복문에서 `useState` 또는 다른 Hook을 사용하고 싶다면  
> 해당 로직을 **새로운 컴포넌트로 추출**해서 그 안에서 사용하세요.

---

### 📘 공식 설명 수준

> 현재 우리가 학습 중인 React 공식 사이트의 Quick Start에서는  
> 이 정도 수준까지만 **Hook에 대해 간단히 안내**하고 있습니다.

## #️⃣ Hooks의 사용 규칙 (Rules of Hooks)

React에서 Hooks를 사용할 때는 반드시 **지켜야 할 규칙**이 있습니다.  
이 규칙들은 React가 **예측 가능하고 안정적으로 동작**하도록 돕습니다.

---

### ❓ 왜 이런 제한이 필요한가?

> React의 동작을 **예측 가능**하게 만들고,  
> **상태 관리의 안정성**을 보장하기 위해서입니다.

---

### 🔒 주요 규칙

#### 1. 조건문이나 반복문 안에서 Hooks를 사용하지 말 것

- 매번 렌더링할 때마다 **Hook 호출 순서가 달라질 수 있음**
- React는 Hook이 호출되는 순서를 기반으로 상태를 추적하기 때문에  
  순서가 바뀌면 **정확한 상태 추적이 불가능**해집니다.

```jsx
// ❌ 잘못된 예시
if (isVisible) {
  const [count, setCount] = useState(0); // 조건문 안에서 사용 ❌
}
```

#### 2. 컴포넌트 최상단에서만 Hook 호출

- 모든 Hook은 **컴포넌트 함수의 최상단에서 선언**되어야 합니다.
- 그래야 React가 **렌더링 간 동일한 순서**로 Hook을 실행할 수 있습니다.

---

### ⚠️ 위반 시 발생할 수 있는 문제

- 상태가 꼬이거나, 예상치 못한 리렌더링 발생
- 메모리 누수나 비동기 처리 오류
- `React has detected a change in the order of Hooks` 경고 발생

---

> 🧠 정리: React는 각 렌더링 시점에 Hook의 순서로 상태를 연결합니다.  
> 순서가 바뀌면 React는 어떤 상태가 어떤 Hook과 연결되어야 하는지 알 수 없습니다.

---

## ❓ 왜 function형 컴포넌트에서만 Hook을 사용할까?

React에서는 **Hook을 function형 컴포넌트에서만 사용할 수 있습니다.**  
그 이유는 다음과 같습니다.

---

### 🏛️ Class형 컴포넌트의 한계

- 예전에는 상태 관리와 생명주기(lifecycle)를 위해 **Class형 컴포넌트**를 사용했습니다.
- 하지만 Class 컴포넌트는 다음과 같은 단점이 있었습니다:
  - **복잡한 문법** (`this`, `constructor`, `binding` 등)
  - **코드 재사용 어려움** (로직 추출이 어려움)
  - **유지보수 복잡성 증가**

---

### 🌟 Hook의 등장 배경

> React는 **상태 관리와 재사용 가능한 로직 구현을 더 간단하게** 하기 위해  
> Hook을 도입하게 되었습니다.

- Hook은 `useState`, `useEffect` 등과 같이 **함수형 컴포넌트 안에서 상태 관리와 side effect를 처리**할 수 있도록 도와줍니다.
- 별도의 클래스 없이도 컴포넌트가 **상태를 가질 수 있게** 되었습니다.

---

### ✅ React의 방향성

- React 팀은 **function형 컴포넌트 + Hook 사용**을 **공식적으로 권장**하고 있습니다.
- 그에 따라 Hook은 **function형 컴포넌트 전용**으로 설계되었습니다.

---

### 🚫 Class 컴포넌트에서 Hook을 사용할 수 없는 이유

- Hook은 함수 실행 흐름(호출 순서)을 기반으로 상태를 추적합니다.
- 클래스 문법은 함수 실행이 아닌 **객체 기반 구조**이므로, Hook의 원리와 맞지 않습니다.

---

> 📌 결론:  
> Hook은 **함수형 컴포넌트의 선언적 구조에 맞춰 설계된 기능**이기 때문에,  
> **Class형 컴포넌트에서는 사용할 수 없습니다.**

---

## 🆚 Function Component vs Class Component

React를 공부하다 보면  
**"왜 요즘은 함수형 컴포넌트를 주로 사용할까?"**  
라는 의문이 생길 수 있습니다.

---

### 🤔 아직도 class 컴포넌트를 자주 보게 되는 이유

- 인터넷 자료나 오래된 강의 등에서 **class형 컴포넌트**를 많이 접할 수 있기 때문입니다.
- 이는 React의 **진화 과정**을 알면 쉽게 이해할 수 있습니다.

---

## 📜 React의 진화와 컴포넌트 형태 변화

### 1️⃣ React 초창기 (2013년 ~ 2014년)

- 함수형 컴포넌트는 존재했지만, 역할은 단순했습니다.
  - **`props`를 받아 UI만 반환**하는 **프리젠테이셔널 컴포넌트**
- 상태(`state`)나 생명주기(`lifecycle`) 같은 기능은 **사용 불가**
- 따라서 주요 기능은 모두 **class 컴포넌트로 작성**해야 했습니다.

---

### 2️⃣ React 16.8 (2019년 2월) — Hook의 등장

- `useState`, `useEffect` 등 **Hook 기능이 추가**됨
- 이로 인해 함수형 컴포넌트에서도 **상태 관리와 생명주기 처리 가능**
- 코드가 간결해지고, 재사용성과 가독성이 높아짐

```jsx
// ✅ 함수형 컴포넌트 + Hook
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트되거나 업데이트됨');
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;
}
```

---

### ✅ 현재 React의 방향

- React 공식 문서와 커뮤니티는 **function 컴포넌트 + Hook 조합**을 **권장**
- 함수형 방식이:
  - 코드가 더 **간결**
  - **로직 분리 및 재사용**이 쉬움
  - `this`나 `binding` 필요 없음

---

> 📌 정리:  
> Class 컴포넌트는 과거의 유산이고,  
> 지금은 함수형 컴포넌트가 React의 **표준 스타일**로 자리잡고 있습니다.

---

컴포넌트 간 데이터 공유

이번에는 여러 개의 컴포넌트에서 **같은 데이터를 공유할 수 있는가?**  
또는 **왜 같은 컴포넌트인데 각각의 상태가 따로 관리되는가?** 에 대해 알아봅니다.

---

### 📌 학습 포인트

- 공식 사이트에서는 `MyButton` 예시로 설명하지만,  
  우리는 앞서 작성한 `CountState` 예제를 기준으로 이해하면 됩니다.

---

### ❓ 의문점

> "왜 변수는 `count` 하나인데, 버튼 3개의 state가 각각 다른 값을 가지는 걸까?"

---

### 🔍 이유 설명

- 각 `CountState` 컴포넌트는 **자신만의 state(count)** 를 가지고 있습니다.
- React에서 컴포넌트를 여러 번 사용하면, **각 인스턴스는 독립적인 상태**를 갖게 됩니다.
- 즉, 함수는 하나지만 **각 버튼은 서로 다른 개체(instance)** 로 취급되기 때문에  
  각기 다른 상태를 저장할 수 있는 것입니다.

---

### ✅ 예시 (3개의 독립적인 컴포넌트 사용)

```jsx
import CountState from './CountState';

function App() {
  return (
    <div>
      <CountState />
      <CountState />
      <CountState />
    </div>
  );
}
```

- 위 예제에서 `CountState`는 동일한 컴포넌트지만,
- 각각의 `useState`가 **별도로 메모리에 존재**하므로 서로 영향을 주지 않습니다.

---

### 📎 요약

- React 컴포넌트는 **재사용 가능한 함수**이지만,
- 여러 번 사용될 경우 **각 인스턴스는 서로 독립적으로 동작**합니다.
- 따라서 각 `CountState`는 자기만의 `count` 값을 가지는 것이 **정상적인 동작**입니다.

---

> 📘 상태 공유가 필요한 경우엔 `props`나 `context`, 또는 전역 상태 관리 도구를 활용해야 합니다.  
> 이 내용은 다음 단계에서 배울 예정입니다!

---

---

## 1️⃣1️⃣ 컴포넌트 간 데이터 공유 (2) — 상태 끌어올리기

이전에는 각각의 `CountState` 컴포넌트가 **독립적인 상태(count)** 를 가지고 있었습니다.  
이번에는 **상태를 부모 컴포넌트로 끌어올리고**,  
여러 자식 컴포넌트에서 **공유된 상태**를 사용하는 구조를 학습합니다.

---

### 🔄 상태 끌어올리기 (Lifting State Up)

> 여러 컴포넌트가 **공통의 상태를 공유**해야 할 경우,  
> 상태를 **공통 부모 컴포넌트로 끌어올리는 방식**입니다.

---

### 📁 자식 컴포넌트: `CountState2.js`

```jsx
function CountState2({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default CountState2;
```

- `props`로 전달받은 `count`와 `onClick`을 사용합니다.
- 버튼을 클릭하면 **부모(App)의 handleClick 함수가 실행**됩니다.

---

### 🧠 동작 설명

1. 버튼을 클릭하면 자식 컴포넌트의 `onClick` prop이 호출됨
2. 이 prop은 `App` 컴포넌트에 정의된 `handleClick` 함수
3. `handleClick` 함수는 `setCount(count + 1)` 실행
4. 상태가 변경되면 React가 다시 렌더링 → 새로운 `count` 값이 자식에게 전달됨

---

### 📁 부모 컴포넌트: `App.js`

```jsx
import { useState } from 'react';
import CountState2 from './CountState2';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
```

---

### 📌 정리

- **상태를 App으로 끌어올림**으로써 모든 버튼이 **같은 상태(count)** 를 공유
- 버튼을 어느 하나 클릭해도 **모든 버튼의 값이 함께 변경**됨
- 이 패턴을 **state 끌어올리기 (Lifting State Up)** 라고 부릅니다

---

> 💡 여기서 "위로"라는 표현은, **상위(parent) 컴포넌트로 상태를 옮기는 것**을 의미합니다.

---

## 1️⃣1️⃣ 컴포넌트 간 데이터 공유 (3) — 실습 정리

이번에는 실제로 `App.js` 안에서 `CountState2` 컴포넌트를 정의하고,  
**state를 끌어올려 props로 전달하는 실습 예제**를 정리합니다.

---

### 🛠️ 실습 목표

- `App.js` 파일 하나 안에 `CountState2` 컴포넌트를 정의
- `useState`와 `handleClick` 함수는 `App` 컴포넌트에만 작성
- `CountState2`는 `props(count, onClick)`를 받아 사용

---

### 📁 App.js

```jsx
import { useState } from 'react';

// ✅ 자식 컴포넌트 정의
function CountState2({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// ✅ 부모 컴포넌트
function App() {
  const [count, setCount] = useState(0); // 상태는 App에서만 선언됨

  function handleClick() {
    setCount(count + 1); // 상태 업데이트
  }

  return (
    <div>
      {/* CountState2를 여러 번 호출해도 같은 상태(count)를 공유 */}
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
      <CountState2 count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
```

---

### 🔍 설명

- `CountState2`는 `count`, `onClick`이라는 **props를 통해 데이터를 전달받음**
- 버튼을 클릭하면 `App`의 `handleClick()` 실행 → `setCount()`로 상태 업데이트
- `count`는 `App`에 단 하나만 존재하지만,  
  **여러 컴포넌트에 props로 전달되므로 상태가 공유됨**

---

### ✅ 결과

- 어떤 버튼을 클릭해도 모든 버튼의 숫자가 함께 증가함
- **state 끌어올리기(lifting state up)** 개념을 실습을 통해 이해할 수 있음

---

> 🧠 여러 컴포넌트가 같은 데이터를 공유해야 할 때는 상태를 공통 부모 컴포넌트로 끌어올리는 것이 핵심입니다!

---


# 3월 27일 강의내용

## 📌 React의 개발흐름 이해와 전체 개념정리  

### 🧩 Component의 생성과 중첩(Nesting)

#### ✅ Component란?
1. `component`는 고유한 **로직과 모양을 가진 UI의 일부**입니다.  
2. 버튼처럼 **작은 단위부터**, 전체 페이지처럼 **큰 단위까지** 구성할 수 있습니다.  
3. `component`는 **마크업을 반환하는 JavaScript 함수**입니다.  

---

#### ✅ Nesting이란?
- Nesting은 **하나의 component 안에 다른 component를 포함하는 구조**입니다.  
- CSS 선택자의 중첩 구조와 비슷하게 이해하면 쉽습니다.  

📌 참고: CSS는 **2023년부터 중첩(Nesting)을 자체 지원**하며,  
이전에는 **Sass, Less 등의 전처리기**를 통해 사용하던 기능입니다.  

---

### 🛠 실습: MyApp Component 만들기

#### ✅ 실습 목표
- `MyApp`이라는 함수형 component를 생성합니다.  
- 어떤 디렉토리에 파일을 만들지, 함수는 어떤 방식으로 구성할지 생각해봅니다.  

#### ✅ 예시 구성

```jsx

function MyApp() {
  return (
    <div>
      <h1>Welcome to MyApp!</h1>
    </div>
  );
}

export default MyApp;
```

- 📁 **디렉토리**: `src/components/`  
- 📄 **파일 이름**: `MyApp.js`  
- 🧱 **component 구조**: 함수형 component, JSX 반환  

---

### 📦 `export default`와 `export`의 차이

React에서 component를 내보내기(export) 위한 **JavaScript 문법**입니다.  
좀 더 자세한 내용은 [MDN](https://developer.mozilla.org/ko/) 또는 [javascript.info](https://javascript.info/)에서 확인할 수 있습니다.

---

#### ✅ 1. Named Export

- 하나의 파일에 **여러 개의 component를 정의**할 때 사용합니다.
- component를 사용하는 쪽에서는 **정확한 이름을 반드시 명시**해야 합니다.

```jsx

export function sayHello() {
  console.log("Hello!");
}
```

```jsx

import { sayHello } from './utils';
```

---

#### ✅ 2. Default Export

- 파일당 **하나의 대표 component만 내보낼 때** 사용합니다.  
- 사용하는 쪽에서는 **이름을 자유롭게 지정**할 수 있습니다.

```jsx
// MyApp.js
export default function MyApp() {
  return <h1>Hello!</h1>;
}
```

```jsx

import MyApp from './MyApp'; 
```

---

### 🎯 결론

✔ `component`는 UI의 작은 조각으로, 중첩하여 화면을 구성할 수 있습니다.  
✔ `export default`와 `export`는 component를 다른 파일에서 사용할 수 있도록 내보내는 방식입니다.  
✔ Named Export는 **여러 개의 export에 적합**, Default Export는 **대표 component에 적합**합니다.  
✔ 실습을 통해 `MyApp` component를 만들어보고 직접 nesting 구조도 경험해보세요! 🚀

### 💡 JSX로 마크업 작성하기

- 위에서 작성한 코드의 마크업 문법을 **JSX**라고 합니다.
- **반드시 사용하는 것은 아니지만**, React 프로젝트에서는 **편의성 때문에 JSX를 주로 사용**합니다.
- JSX는 HTML보다 **더 엄격한 문법**을 따릅니다.  
  예: `<br>` 같은 싱글 태그도 **반드시 닫아야 함** → `<br />`
- React에서는 여러 개의 component를 JSX 태그로 반환할 수 있습니다.  
  다만 **반드시 하나의 부모 요소로 감싸야 합니다**.
  - `<div>`, `<section>` 또는 `<>...</>`와 같은 **Fragment**를 사용합니다.

---

### 🧪 예: AboutPage Component를 작성했다면?

- 이 component를 화면에서 확인하려면 **`App.js`에서 불러와야 합니다.**

```jsx
// App.js
import AboutPage from './AboutPage';

function App() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}
```



---

### 🎨 스타일 추가하기

- React에서는 CSS 클래스명을 지정할 때 `class`가 아닌 **`className`**을 사용합니다.

```jsx
<div className="avatar">내용</div>
```

- `className`은 HTML의 `class` 속성과 동일한 방식으로 동작합니다.
- CSS 규칙은 **별도의 CSS 파일**에 작성하며, React는 CSS를 적용하는 방식에 제한을 두지 않습니다.  
  → **정적 웹사이트에서 사용하는 방식 그대로 사용 가능**

---

#### 📎 CSS 추가 방법

##### ❌ (비추천) `<link>` 태그 사용

- HTML의 `<head>`에 `<link>`를 직접 추가하는 방법도 있지만,  
  정적 HTML 파일을 수정해야 하므로 React 프로젝트에서는 잘 사용하지 않습니다.

##### ✅ (권장) CSS 파일 import

- `App.css` 같은 파일을 만들어 직접 import 합니다.

```jsx
// App.js
import './App.css';
```

---

### 📊 데이터 표시하기

- JSX를 사용하면 **자바스크립트 내부에 마크업을 작성**할 수 있습니다.  
  (즉, 마크업 안에서 자바스크립트를 사용하는 것이 **아니라** 자바스크립트 안에서 마크업을 작성하는 것입니다.)

---

#### ✨ JSX 안에서 JavaScript 표현식 사용하기 (Escape Back)

- JSX에서는 `{}`를 사용하여 **변수나 표현식**을 삽입할 수 있습니다.

```jsx
const name = "Alex";

return <h1>Hello, {name}!</h1>;
```

- 속성에서도 변수 사용이 가능합니다:

```jsx
<img src={user.imageUrl} className="avatar" />
```

- 위 예제에서
  - `src={user.imageUrl}`: **변수 값을 전달**
  - `className="avatar"`: **단순한 문자열**


# 3월 20일 강의내용

## 1. Node.js

### 1-4. `node_modules/`
- 프로젝트의 **패키지 모듈**이 저장되는 디렉토리입니다.
- 초기 설치 시, **약 37,352개 파일과 4,597개 폴더**, 총 **200MB** 용량을 차지합니다.
- `git`으로 관리되지 않으므로, VS Code에서 **흐릿하게 표시**됩니다.

---

### 1-5. `public/`
- 정적(`static`) 파일을 저장하는 디렉토리입니다.
- **배포(`build`) 후, HTML, CSS, JavaScript 등의 파일이 보관**됩니다.
- 일반적으로 개발 중 직접 수정할 일은 거의 없습니다.

#### 📌 `public/index.html`
- React 애플리케이션을 실행하는 **최초 HTML 파일**입니다.

##### ✅ 예시 코드:

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

---

### 1-6. 의존성 관리와 package.json

#### package.json을 유지해야 하는 이유

1. **프로젝트의 의존성 정보 제공**
   - 프로젝트에서 어떤 패키지를 사용하는지 정의하는 역할을 합니다.
   - 어떤 패키지를 설치해야 하는지 알 수 있는 기준이 됩니다.

2. **버전 범위 설정 가능**
   - `^18.0.0`처럼 최신 패치 버전을 허용할 수도 있고, `18.2.0`처럼 정확한 버전만 고정할 수도 있습니다.
   - 개발자가 원하는 방식으로 유연하게 관리할 수 있습니다.

3. **스크립트와 메타데이터 저장**
   - `scripts` 속성을 이용해 빌드, 테스트, 실행 등의 명령어를 저장할 수 있습니다.
   - 프로젝트 실행을 위해서 반드시 필요합니다.

4. **새로운 패키지 설치 및 관리**
   - 패키지를 설치하면 `package.json`에 추가되고, `package-lock.json`에는 정확한 버전이 기록됩니다.
   - `package.json`이 없으면 새로운 패키지를 추가할 수 없습니다.

---

#### package.json과 package-lock.json 차이점

| 구분 | package.json | package-lock.json |
|------|-------------|------------------|
| **역할** | 프로젝트의 기본 정보와 의존성을 정의 | 설치된 패키지의 정확한 버전 정보 저장 |
| **내용** | 패키지 이름, 버전, 스크립트, 의존성 목록 포함 | 의존성 트리 및 패키지의 정확한 버전 기록 |
| **업데이트** | 직접 수정 가능 | 직접 수정하지 않으며, `npm install` 시 자동 업데이트 |
| **버전 관리** | 일반적으로 `^` 또는 `~`로 버전 범위를 지정 | 특정 버전이 고정되어 일관된 환경 유지 가능 |
| **Git 관리** | 보통 Git에 포함됨 | 포함하는 것이 권장되지만, `node_modules/`처럼 무시될 수도 있음 |

- `package.json`에 `"react": "^18.0.0"`이 기록되어 있으면, 설치할 때 최신 `18.x.x` 버전이 자동으로 설치될 수 있습니다.
- `package-lock.json`에는 `"react": "18.2.0"`처럼 정확한 버전이 기록되어 있고, `npm install` 실행해도 **같은 버전이 설치**됩니다.
- 따라서 팀 프로젝트에서는 **package-lock.json을 유지하는 것이 중요**합니다.

---

#### package.json의 의존성 내용 종류

- **dependencies**: 실제 코드에서 사용하는 라이브러리 (예: React, Express 등)
- **devDependencies**: 개발할 때만 필요한 라이브러리들 (예: Webpack, ESLint 등)
- **peerDependencies**: 필요한 라이브러리지만, 직접 설치하지 않고 사용자에게 설치를 맡기는 경우
- **optionalDependencies**: 있어도 되고 없어도 되는 선택적 의존성

---

#### 의존성을 관리하는 이유

##### 1. 손쉬운 설치 및 업데이트
- `npm install` 또는 `yarn install` 한 줄로 모든 의존성을 자동 설치 가능.
- 특정 버전의 라이브러리를 쉽게 업데이트 가능.

##### 2. 일관된 개발 환경 유지
- 팀원들과 같은 라이브러리 버전을 유지할 수 있음.
- `package-lock.json`을 활용하면 동일한 패키지를 정확한 버전으로 설치 가능.

##### 3. 중복 설치 방지
- 필요 없는 라이브러리를 제거하여 프로젝트를 가볍게 유지할 수 있음.

---

`package.json`은 의존성을 체계적으로 관리하는 역할을 합니다.  
프로젝트에 필요한 라이브러리를 쉽게 **설치, 업데이트, 유지**할 수 있도록 도와주는 시스템입니다.

### 1-7. node module의 재설치

#### 📌 node module을 다시 설치해야 하는 경우
node module을 다시 설치해야 하는 경우는 다음과 같은 **3가지 상황**이 있을 수 있습니다.

1. **팀 작업을 하면서 GitHub로부터 프로젝트 파일을 `clone` 했을 경우.**
2. **개인이 자신의 프로젝트를 다른 PC 등에 `clone`을 받아 계속 개발해야 하는 경우.**
3. **프로젝트에 문제가 생겨서 node module을 다시 설치해야 하는 경우.**

---

#### 🛠️ clone을 받은 프로젝트의 경우
1. 다음 명령을 실행하면 `package.json`과 `package-lock.json`을 참고하여 패키지를 다시 설치합니다.
2. node_modules 디렉토리는 자동으로 생성합니다.
3. 설치가 끝나면 프로젝트를 실행하여 정상 동작을 확인합니다.

#### 🛠️ 프로젝트에 오류나 의존성 등의 문제가 생겼을 경우

##### 1️⃣ `node_modules` 폴더와 `package-lock.json` 파일 삭제
  1) 아래 명령어를 실행하여 기존 `node_modules` 폴더와 `package-lock.json` 파일을 삭제합니다.

    [rm -rf node_modules package-lock.json]

  2) cache가 오래되면 충돌이 발생할 수도 있기 때문에 문제 해결에 도움이 될 수 있습니다. force 옵션을 사용하여 강제 삭제합니다.

    [npm cache clean --force]

  3) 일반적으로 캐시 정리는 필수가 아니지만, 의존성 문제가 계속된다면 실행하는 것이 좋습니다.

  4) 다음 명령어를 실행하여 패키지를 다시 설치합니다.

    [npm install]

#### 📌 package-lock.json을 삭제하는 이유

##### 1️⃣ `package-lock.json`이 손상되었거나, 잘못된 의존성이 있을 때
- 가끔씩 `package-lock.json`이 **의존성 충돌** 때문에 이상한 상태가 될 때가 있습니다.
  - 예를 들면 패키지를 여러 번 업데이트하면서 충돌이 발생하는 경우.
  - **수동으로 `package.json`을 수정**해서 `package-lock.json`에 영향을 미치는 경우.
- 이러한 경우, `package-lock.json`을 **삭제하고 새로 생성하면 충돌이 해결될 수도 있음**.

---

##### 2️⃣ 최신 버전의 패키지를 다시 받고 싶을 때
- **최신 버전의 패키지를 다시 다운로드**하고 싶다면, `package-lock.json`을 삭제하는 것이 효과적입니다.
- 재설치하면 **최신 버전의 종속성을 기반으로 새로운 `package-lock.json`이 생성**됩니다.

---

##### 3️⃣ 팀 프로젝트에서 다른 팀원이 이상한 상태로 `package-lock.json`을 업데이트했을 때
- 팀원 중 누군가가 **로컬에서 이상한 상태**로 `package-lock.json`을 변경했다면,  
  파일을 삭제하고 다시 설치하는 것이 더 깨끗할 수 있습니다.

---

⚠️ **문제가 없다면 `package-lock.json`을 유지하는 것이 좋지만, 의존성 충돌이나 패키지 문제로 인해 에러가 발생한다면 삭제 후 재설치하는 것이 좋습니다.**



## 2. React

### 2-1. 개요

---

#### 📌 React란?
- React는 **component** 단위로 개발하여 **레고를 조립하듯이 앱을 완성**합니다.
- `component`는 **작은 기능을 실행할 수 있는 하나의 모듈**입니다.
- **공식 사이트의 홈**에는 `component`가 어떻게 사용되는지 설명하고 있습니다.

---

#### 🛠️ React component 개념
- React가 `component`를 이용하여 **어떻게 사용자 인터페이스를 구성하는지** 살펴보도록 하겠습니다.
- 이해를 돕기 위해 React 코드가 나오지만, **코드 자체를 깊이 이해할 필요는 없습니다.**
- React `component`가 **페이지로 변환되는 과정**에 집중해 주세요.

---

#### 🔗 React 사이트 활용
- **[React 공식 사이트](https://react.dev/)**에 접속하여 예제 코드를 확인하세요.
- 사이트에서 **자체 한글을 지원**합니다. ⚠️ **자동 번역은 사용하지 마세요.**
- **왼쪽 코드에 마우스를 `hover`** 하면, 오른쪽 출력에서 어느 부분인지 확인할 수 있습니다.
- `component`의 **조립 과정**에만 집중해 주세요.

---

### 2-2. Component를 사용한 유저 인터페이스 생성

---

#### 📌 React에서 component란?
- React를 사용하면 `component`라고 하는 **개별 조각**으로 **사용자 인터페이스**를 구축할 수 있습니다.
- `Video`, `Thumbnail`, `LikeButton`이라는 **React component**를 생성하고,  
  이 `component`를 결합하여 **화면과 페이지 그리고 앱 전체를 구성**합니다.

---

#### 🛠️ Component의 구조
- 첫 번째 예제는 `Video.js`라는 **함수형 component**입니다.
- `component`의 이름은 **파일 이름과 동일**하며, **영문 대문자로 시작**합니다. _(PascalCase)_
- `Video` component는 `Thumbnail`과 `LikeButton`이라는  
  **두 개의 component를 포함**하고 있습니다.

---

#### ⚠️ React component의 조합
- React는 **개인, 팀, 조직에서 작성한 component**를  
  원활하게 결합할 수 있도록 설계되었습니다.

---

### 2-3. Component를 작성하는 JavaScript와 Markup

#### 📌 React에서 component란?
- React `component`는 **JavaScript 함수**입니다.

---

#### 🛠️ 조건과 목록 처리
- **조건에 따라 화면을 다르게 표시**하고 싶다면 `if` 문을 사용하면 됩니다.
- **목록을 표시**하고 싶다면 `map()` 함수를 이용하면 됩니다.

---

#### 🎯 React와 프로그래밍
- 결국 React를 배우는 것은 **프로그래밍을 배우는 것과 같습니다**.
- **JavaScript를 이미 알고 있다면** 더 쉽게 배울 수 있습니다.

#### 📌 JSX란?
- React에서 사용되는 마크업을 **JSX (JavaScript Syntax eXtension)** 이라고 부릅니다.
- JSX는 **React를 통해 대중화된 JavaScript 확장 문법**입니다.

---

#### 🛠️ JSX의 역할
- JSX 마크업을 **관련된 렌더링 로직과 가까이 두면**,  
  `component`를 **쉽게 생성, 관리, 삭제**할 수 있습니다.

### 2-4. 필요한 곳에 상호작용 기능 추가

#### 📌 React component의 역할
- React `component`는 **데이터를 수신하고**,  
  **화면에 표시해야 하는 내용을 반환**합니다.
- 사용자의 입력을 받아 **새로운 데이터를 `component`에 전달**할 수도 있습니다.

---

#### 🛠️ React의 상호작용 기능
- React는 **상호작용을 통해 얻은 새 데이터로 화면을 업데이트**합니다.
- 이는 `SearchInput`과 `VideoList` 두 개의 `component`를  
  **결합한 또 다른 `component`** 입니다.

---

#### 🔗 React 개발 방식
- React 개발은 **작은 `component`를 개발하고**,  
  이렇게 개발된 `component`를 모아서  
  **더 큰 `component`를 구성하는 방식**으로 이루어집니다.

---

### 2-5. full-stack App 개발을 도와주는 React Framework

#### 📌 React와 Framework의 차이
- React는 **라이브러리**이기 때문에 `component`를 조합할 수는 있지만,  
  **라우팅 및 데이터 가져오기 방법 등을 고정하지 않습니다.**
- React로 전체 앱을 빌드하려면 **Next.js 또는 Remix**와 같은  
  **full-stack React Framework**를 사용하는 것이 좋습니다.

---

#### 🛠️ React Framework의 역할
- 사이트의 `confs/[slug].js`는 **Next.js에서 제공하는 routing 방법** 중 하나입니다.
- React도 하나의 **아키텍처(Architecture)** 입니다.
  - **소프트웨어 아키텍처**란?  
    → 소프트웨어의 구성 요소 사이에서 유기적 관계를 포함하고  
       소프트웨어 설계와 업그레이드를 통제하는 지침과 원칙 _(출처: Wikipedia)_

---

#### 🔗 Framework를 활용한 데이터 관리
- 이를 구현하는 **Framework**를 사용하면,
  - **서버에서 실행되거나**
  - **혹은 빌드 중에도 비동기 `component`에서 데이터를 가져올 수 있음**.
- 또한, **파일이나 데이터베이스에서 데이터를 읽어와서**  
  **대화형 `component`에 전달할 수도 있음**.

---

### 2-6. 모든 플랫폼에서 최고의 성능을 발휘하는 React

#### 📌 React의 범용성
- React를 사용하면 **통일한 기술**을 활용하여,  
  **웹 앱과 네이티브 앱을 모두 구축**할 수 있습니다.
- 각 플랫폼의 고유한 강점을 활용하여,  
  **모든 플랫폼과 잘 어울리는 인터페이스**를 구현할 수 있습니다.

---

#### 🛠️ 웹의 본질에 충실하기
- 사람들은 **웹 앱 페이지가 빠르게 로드되기를 기대**합니다.
- React를 사용하면 **서버에서 데이터를 가져오는 동안에도**  
  **HTML을 스트리밍**할 수 있기 때문에,  
  **JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있음**.
- 또한, 클라이언트 측에서는 **표준 웹 API**를 사용하여  
  **렌더링 도중에도 UI를 반응하도록** 할 수 있습니다.
- 이러한 동작들은 **사람들이 원하는 빠른 렌더링을 도와줍니다.**

⚠️ **full-stack App을 개발하는 것이라면, Framework를 사용하는 것이 생산성이 높습니다.**

---

### 새로운 기능에 맞춰 업그레이드 하기

#### 📌 React의 변화 대응 방식

- React는 **변화에 신중하게 접근**합니다.
- 모든 React `commit`은 **10억 명 이상의 사용자에 의해**  
  여러 환경에서 테스트를 거쳤습니다.

---

#### 🛠️ 대규모 마이그레이션 전략

- Meta에 있는 **10만 개 이상의 React component**는  
  **모든 마이그레이션 전략의 검증을 지원**합니다.
  - 마이그레이션이란?  
    → **소프트웨어를 한 시스템에서 다른 시스템으로 이동하는 것**.

---

#### 🎯 React의 연구 및 개선 과정

- React 팀은 **항상 React를 개선하는 방법을 연구**합니다.
- **몇 년이 걸리는 연구**도 있습니다.
- React는 **연구 아이디어를 제품에 적용하는 데 높은 기준**을 가지고 있습니다.
- **검증된 접근 방식만이 React의 일부**가 됩니다.

---

# 3월 13일 강의내용

## 1. Node.js

### 1-1. Node.js란 무엇인가?
  1.Node.js란?
  - 2009년 발표된 Node.js를 개발한 **라이언 달(Ryan Dahl)**은 물리학을 전공했으나 개발에 흥미를 느껴 프리랜서  개발자로 일하던 개발자였습니다.

  - Apache 서버는 "요청을 처리할 때 블로킹(blocking) 방식으로 동작 한다"는 문제가 있었습니다.

  - 이를 해결하기 위해 비동기(Asynchronous) 방식의 서버가 필요하다고 판단하고 개발을 시작합니다.

  - 개발을 시작할 때는 Python을 사용했지만, JavaScript의 비동기 특성이 서버 개발에 더 적합하다고 판단해 방향을 전환합니다.

  - 당시 Chrome이 가장 빠른 브라우저로 주목받고 있었고, 그 핵심인 V8 엔진을 사용하기로 합니다.

  2.Node.js는 어디에 활용되는가?
   - 웹 서버(Express.js, Nest.js) -> REST API, GraphQL API 개발
   - 실시간 애플리케이션 (Socket.io) → 채팅, 실시간 알림, 스트리밍
   - 서버리스(Serverless) 환경 → AWS Lambda 같은 FaaS(Function as a Service)

  3.Node.js가 인기를 끄는 이유
   - 빠른 성능 : V8 엔진 기반 + 비동기 논 블로킹 방식으로 고성능 처리 가능
   - JavaScript 풀스택 개발 : 프론트엔드와 백엔드를 같은 언어(JavaScript)로 개발 가능
   - 활발한 생태계 : npm을 통해 다양한 패키지 사용이 가능
   - 실시간 애플리케이션에 강함 : WebSocket, Socket.io 지원
   - 마이크로 서비스 및 서버리스 환경과의 조화로운 연동

  4.Node.js는 앞으로도 계속 발전할까?
   - Deno의 등장 : Node.js의 창시자가 만든 Deno가 경쟁자로 떠오르고 있지만, Node.js의 생태계가 훨씬 크고 안정적입니다.
   - ES 모듈 지원 강화 : 기존의 CommonJS에서 ES 모듈로의 전환 진행 중
   - 클라우드 및 서버리스 환경 확대 : AWS, Azure, GCP에서 Node.js 지원 강화

### 1-2. React의 진화와 강의 진행 방향
  **React의 발전**
  - React는 JavaScript UI 라이브러리를 표방하며, 2013년 5월 29일 공개되었습니다.

  - 페이스북의 개발자 중 한 명이었던 Jordan Walke가 개발하여, 버전 0.3.0으로 소개되었습니다.

  - React 18.2.0 이전까지만 해도, React의 헤드 카피는 자바스크립트 라이브러리임을 강조했습니다.

  - 2023년 리뉴얼된 공식 사이트의 헤드 카피에서 React의 변화를 확인할 수 있음.

  - 이제 React는 단순한 JavaScript 라이브러리가 아닌, 웹과 앱 UI의 표준 라이브러리로 변해가는 모습을 보이고 있습니다.

  **React의 최신 변화 및 강의 진행 방향**
  - 2024년 12월 5일, React 19.0.0 버전이 공개되며 큰 변화가 있을 예정입니다.

  - React의 주요 버전은 2~3년마다, 부 버전은 1년에 수차례 업그레이드됩니다.

  - React는 이제 프론트엔드 개발자의 필수 과목이 되었습니다.

  **[강의 진행 방향]**
  - React 공식 문서를 기초로 진행하되, 이해를 돕기 위한 자세한 설명 추가.

  - 공식 문서에서는 codesandbox.io에서 테스트를 하도록 구성했으나, 강의에서는 모든 코드를 직접 local에서 테스트할 수 있도록 진행.

  - 로컬 테스트를 위해 create react app(CRA)를 통해 프로젝트를 생성해서 사용하도록 하겠습니다.

### 1-3. React의 개발환경 구축
  - 개발 환경은 Node.js 설치 외에는 특별한 것이 없습니다.

  - node를 검색하여 LTS 버전을 다운로드 합니다. 현재 버전은 22.14.0입니다.

  - 다운로드가 완료되면 시스템에 설치하고, 설치가 끝나면 버전을 확인합니다.

  - Node를 설치하면 npm과 npx가 함께 설치됩니다.

  - npm (Node Package Manager): Node 패키지 관리자

  - npx (Node Package eXecuter): npm에서 제공하는 패키지 실행 도구

  - 이전에는 별도로 설치해야 했기 때문에, 인터넷의 오래된 자료를 보면 설치 방법이 다르게 나와 있습니다.

  - Node.js v0.6.3 (2011년 11월 22일 출시) 버전부터 npm이 포함되었으며,
  npx는 npm v5.2.0 (2017년 7월 5일 출시)부터 npm에 포함되어 자동으로 설치됩니다.

  - 즉, Node.js v8.2.0 이상을 설치하면 npm과 npx는 자동으로 설치됩니다.

  - 이 외에는 코드 에디터와 웹 브라우저만 준비하면 개발 환경 구축은 끝입니다.