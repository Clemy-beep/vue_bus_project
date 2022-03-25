<template>
  <div id="bus-item">
    <h2>Bus n°{{ bus.immat }}</h2>
    <p>Driver: {{ bus.driver.username }}</p>
  </div>
</template>
<script>
export default {
  props: {
    bus: Object,
  },
  name: "BusItem",
};
</script>
