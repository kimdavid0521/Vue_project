<template>
  <div>
    <h2>TestChild</h2>
    <h3>파라미터 num : {{ num }}</h3>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
export default {
  name: "TestChild",
  setup() {
    const currentRoute = useRoute();
    //동적 라우트 (:num) 에 전달된 값 얻어와 num 변수에 저장
    const num = ref(currentRoute.params.num);

    //watchEffect: ref, reactive 변화가 감지되면 수행

    watchEffect(() => {
      //num에 바뀐 파라미터를 대입 -> 컴포넌트 다시 랜더링
      num.value = currentRoute.params.num;
    });

    // 프로그래밍 방식의 라우팅 제어하기
    const router = useRouter();

    const closeTest = () => {
      router.push("/test"); // test로 라우팅 -> 주소변경 + 컴포넌트 변경

      //< RouteLink to="/test" > // 클릭한것과 같은 효과
    };

    //setup에서 리턴된 속성만 template에서 사용 가능
    return { num, closeTest };
  },
};
</script>
<style></style>
