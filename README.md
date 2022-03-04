# poshflix

movies & tvshow streaming service for my friends

## 설치및 실행

### vscode extensions (optional)

- Prettier
- ESLint

prettier를 vscode기본 포메터로 설정
vsCode settings.json 설정파일수정

- vscode 설정으로 이동 (`ctrl + ,`)
- 우측 상단 문서 버튼 클릭
- ```json
  "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
  }
  ```

---

### 실행 

- node 설치

- npm i

- npm start

- localhost:9000

---

## Used librarys

- styled-components
- react-router-dom

---

### librarys explain

- #### styled-components
  styled-components는 CSS in JS 라는 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법입니다. 
  따라서 html, css, html 3가지로 분리 하는것이 아니라, 컴포넌트 단위로 분리해 jsx 처럼 css도 js파일로 관리한다
  (Styled Components는 이렇게 트랜드가 되고 있는 CSS-in-JS 라이브러리 중에서도 단연 가장 널리 사용되고 있는 라이브러리입니다.)
  ```javascript
  import styled from "styled-components";

  styled.button`
    font-size: 1rem;
  `;

  // 아래 css가 적용된 <button>html 엘리먼트가 리턴된다고 생각하면된다
  button {
    font-size: 1rem;
  }
  ```
  - styled로 생성된 컴포넌트는 클래스명 자동생성해서 스타일 적용됨

  - props를 넘겨 가변 스타일링 가능
    ```
    color: ${(props) => props.color || "gray"};
    ```
