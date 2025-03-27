//  main.js
//  index.html에 추가되는 모듈
// main.js에 작성된 내용은 전역으로 적용된다!

import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css"; // 모든 컴포넌트에 해당 css가 적용됨

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
