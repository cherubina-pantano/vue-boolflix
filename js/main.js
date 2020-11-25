/*
*  BOOLFLIX
*/
const app = new Vue({
  el: '#app',
  data: {
      newSearch: '',
      results: '',
  },
  methods: {
    getMovie() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'dddf18dfaffab29c0f83dd0efe0302df',
            query: this.newSearch,
            language: 'it-IT',
          }
      })
      .then( result => {
          console.log(result.data);
          this.results= result.data.results;

        })
       .catch(error => {
         console.log(error);
       });
    }

  } //Fine methods
});
