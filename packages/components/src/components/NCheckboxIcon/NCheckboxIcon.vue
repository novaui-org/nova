<template>
  <svg
    class="n-checkbox-icon"
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.83L3.83 6.66L9.5 1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      pathLength="1"
      stroke-dasharray="1"
      fill="none"
    />
  </svg>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.n-checkbox-icon {
  path {
    stroke: $n-white;
    animation: svg-path .35s ease-in forwards;
  }
}

@keyframes svg-path {
  0% {
    visibility: hidden;
    stroke-dashoffset: 1;
  }
  45% {
    visibility: visible;
    stroke-dashoffset: 1;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
