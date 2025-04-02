<template>
  <DefaultLayout>
    <!-- 헤더 슬롯에 header 컴포넌트 끼워 넣기 -->
    <template v-slot:header> <Header /> </template>

    <!-- nav 슬롯에 navbar 컴포넌트 끼워 넣기 -->
    <template v-slot:navbar> <Navbar /> </template>

    <!-- slot에 라우트된 페이지 끼워넣기 -->
    <template v-slot:default> <RouterView /> </template>
  </DefaultLayout>
</template>

<script setup>
import { RouterView } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>
