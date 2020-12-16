// Esercizio: Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide che sto per aggiungere su Drive.
// https://flynn.boolean.careers/exercises/api/random/mail


var app = new Vue(
  {
    el:"#vue_container",
    data: {
      title:"La mia lista",
      emails:[],

    },
    methods:{

    },
    mounted: function(){
      const self = this;
      for (var i = 0; i < 10; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(function (response) {
            self.emails.push(response.data.response);
            });
        console.log(self.emails);
      }

    }
  }
);
