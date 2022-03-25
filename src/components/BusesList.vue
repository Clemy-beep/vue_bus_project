<template>
  <div id="buses-list" v-for="bus in buses" :key="bus.id">
    <BusItem :bus="bus"></BusItem>
    <router-link :to="{ path: `/bus/${bus.id}` }"> See this bus </router-link>
  </div>
</template>

<script>
import BusItem from "./BusItem.vue";
import { mapWritableState, mapState } from "pinia";
import { useBusesStore } from "../stores/busesStore";
import axios from "axios";

export default {
  watch: {},
  name: "BusList",
  components: { BusItem },
  data() {
    return {
      buses: {},
    };
  },
  mounted() {
    this.getBuses.lenght > 0 || this.fetchBuses();
  },
  computed: {
    ...mapWritableState(useBusesStore, {
      setBuses: "buses",
    }),
    ...mapState(useBusesStore, {
      getBuses: "buses",
    }),
    currentBuses() {
      return this.getBuses;
    },
  },
  methods: {
    async fetchBuses() {
      this.buses = await axios
        .get(" https://apibus.quidam.re/api/buses", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
      if (this.buses["hydra:member"]) {
        this.buses = this.buses["hydra:member"];
        this.setBuses = this.buses;
        console.log(this.buses);
      }
    },
  },
};
</script>
