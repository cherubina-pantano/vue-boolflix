/*
*  BOOLFLIX
*/
const app = new Vue({
  el: '#app',
  data: {
      newSearch: '',
      results: [],
      baseImgUrl: 'https://image.tmdb.org/t/p/w342',
      isNotOverview: 'La trama non è disponibile',
  },
  methods: {
    // per ottenere dati da API
    getSearch() {
      this.results= [];
      /*
      * FILM
      */
      axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'dddf18dfaffab29c0f83dd0efe0302df',
            query: this.newSearch,
            language: 'it-IT',
          }
      })
      .then( result => {
          // console.log(result.data);
          const res = result.data.results;
          // Mile1
          // this.results= res;
          // Mile2
          this.results= this.results.concat(res);
        })
       .catch(error => {
         console.log(error);
       });

       /*
       * SERIE TV
       */
       axios.get('https://api.themoviedb.org/3/search/tv', {
           params: {
             api_key: 'dddf18dfaffab29c0f83dd0efe0302df',
             query: this.newSearch,
             language: 'it-IT',
           }
       })
       .then( result => {
           // console.log(result.data);
           const res = result.data.results;

           this.results= this.results.concat(res);

         })
        .catch(error => {
          console.log(error);
        });
    },

    // visualizzare img o testo in base alla lingua
    viewImgLanguage(language) {
      if(language == 'it' || language == 'en') {
          return true;
      }
      return false;
    },

    // proporzione scala voti
    getVote(vote) {
      // arrotonda al valore intero più vicino
      return Math.round(vote / 2);
    },

    // verificare la presenza dell'img
    getCover(cover) {
      console.log(cover);
      if(cover == null) {
        return 'https://www.altavod.com/assets/images/poster-placeholder.png';
      }
      return  this.baseImgUrl + cover;
    }

  } //Fine methods
});
