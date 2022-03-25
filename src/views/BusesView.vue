<template>
  <div id="buses-view">
    <h1>Buses</h1>
    <BusList></BusList>
  </div>
</template>

<script>
import BusList from "../components/BusesList.vue";
export default {
  components: { BusList },
};
</script>
