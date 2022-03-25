import { defineStore } from "pinia";

export const useBusesStore = defineStore({
  id: "buses",
  state: () => ({
    bus: {},
    buses: [],
  }),
  getters: {
    // current_article: (state) => state.article,
    // getArticles : (state) => state.articles
    getBuses: (state) => state.buses,
  },
  actions: {
    // setArticle(article : Object) {
    //   this.article = article;
    // },
  },
});
