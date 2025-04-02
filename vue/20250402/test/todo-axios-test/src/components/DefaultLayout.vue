<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="navbar"></slot>
  </div>

  <div class="content my-5 px-3">
    <!-- 이자리에 vslot default가 들어옴 -->
    <slot></slot>
  </div>
</template>

<script setup></script>
