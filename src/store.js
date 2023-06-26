import { reactive } from "vue";

export const store = reactive({
  apiKey: "2ee35436fcc4164ab712fad706fc6195",
  apiFilms: "https://api.themoviedb.org/3/search/movie",
  apiSeries: "https://api.themoviedb.org/3/search/tv",
  imgUrl:  "https://image.tmdb.org/t/p/w342",
  filmsArray: [],
  seriesArray: [],
  currentSearch: ""
});