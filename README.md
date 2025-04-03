# 202130104 김민식

# 3월 27일 강의내용

## 📌 React의 개발흐름 이해와 전체 개념정리  
<h1>🗓 **2025-03-27 / 4번째 수업**</h1>

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