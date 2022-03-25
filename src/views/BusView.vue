<template>
  <div>
    <h1>Bus n°{{ bus.immat }}</h1>
    <h2>Driver</h2>
    <p>{{ bus.driver.username }}</p>
    <h2>Passagers</h2>
    <div v-for="c in bus.childs" :key="c.id">
      <ChildItem :child="c"></ChildItem>
    </div>
  </div>
</template>

<script>
import { useBusesStore } from "../stores/busesStore";
import { mapState } from "pinia";
import axios from "axios";
import ChildItem from "../components/ChildItem.vue";

export default {
  data() {
    return {
      bus: {},
    };
  },
  components: { ChildItem },
  computed: {
    ...mapState(useBusesStore, { storedBuses: "buses" }),
  },
  created() {
    this.bus =
      this.storedBuses.find((bus) => bus.id === this.$route.params.id) ||
      this.fetchBus();
  },
  methods: {
    async fetchBus() {
      let bu = await axios
        .get(` https://apibus.quidam.re/api/buses/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.error(err);
        });
      this.bus = bu.data;
    },
  },
};
</script>
