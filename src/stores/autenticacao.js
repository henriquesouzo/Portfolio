import { defineStore } from 'pinia';

export var useUsuarioStore = defineStore("usuario", {
  state: () => ({
        diurno: true,  
        portugues: true,
        cookie: false
    }),

    getters: { //o getters tem que ter nome diferente das outras variaveis do state
      userDiurno: state => state.diurno,
      userPortugues: state => state.portugues,
      userCookie: state => state.cookie
  },
    
    actions: { //actions é onde faço as funções que atualiza as states
      noturno(dado) {
          this.diurno = dado.diurno;
      },

      linguagem(dado) {
          this.portugues = dado.portugues;
      },

      aceitoCookie(){
        this.cookie = true;
      }
    },    

    persist: true, //ativa a persistencia no navegador
});