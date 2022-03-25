<template>
  <div id="child">
    <p>{{ child.firstname }} {{ child.lastname }}</p>
  </div>
</template>

<script>
export default {
  props: {
    child: Object,
  },
  name: "ChildItem",
};
</script>
