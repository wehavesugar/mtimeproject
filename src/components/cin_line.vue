<template>
  <aside class="cin_line">
    <p></p>
    <p></p>
  </aside>
</template>

<script>
export default {
  name: "cin_line"
};
</script>

<style scoped>
.cin_line p:first-child {
  height: 0.5em;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.05);
  position: relative;
  z-index: 1;
}
.cin_line p:last-child {
  height: 1.2em;
  background: #f6f6f6;
  position: relative;
  z-index: 0;
}
</style>
