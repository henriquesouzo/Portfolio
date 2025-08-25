<template>
  <div class="navbar">   
    <div class="menu">
      <button @click.prevent="botaoMenu()"><img src="@/assets/imagens/menu.svg" alt="menu"></button>
    </div>

    <div :class="{'botoes': this.menu == false, 'aparecemenu': this.menu == true}">    
      <a @click.prevent="scrollTo('sec1')" v-if="portugues">Início</a>
      <a @click.prevent="scrollTo('sec1')" v-else>Home</a>

      <a @click.prevent="scrollTo('sec2')" v-if="portugues">Conhecimentos</a>
      <a @click.prevent="scrollTo('sec2')" v-else>Knowledges</a>

      <a @click.prevent="scrollTo('sec3')" v-if="portugues">Projetos</a>
      <a @click.prevent="scrollTo('sec3')" v-else>Works</a>

      <a @click.prevent="scrollTo('sec4')" v-if="portugues">Contato</a>
      <a @click.prevent="scrollTo('sec4')" v-else>Contact</a>
    </div>

    <div class="preferencia">      
      <div class="tema" v-if="this.portugues == true && this.diurno == true">
        <p>Noturno</p>
        <button @click.prevent="tema()"> <img src="@/assets/imagens/lua.svg" alt="noturno"></button>
      </div>
      <div class="tema" v-if="this.portugues == false && this.diurno == true">
        <p>Dark</p>
        <button @click.prevent="tema()"><img src="@/assets/imagens/lua.svg" alt="dark"></button>
      </div>

      <div class="tema" v-if="this.portugues == true && this.diurno == false">
        <p>Diurno</p>
        <button @click.prevent="tema()"><img src="@/assets/imagens/sol.svg" alt="diurno"></button>
      </div>

      <div class="tema" v-if="this.portugues == false && this.diurno == false">
        <p>White</p>
        <button @click.prevent="tema()"><img src="@/assets/imagens/sol.svg" alt="white"></button>
      </div>

      <p v-if="this.portugues == true">Translate</p>
      <p v-else>Traduzir</p>

      <button v-if="this.portugues == false" @click.prevent="traduzir()">        
        <img class="bandeira" src="@/assets/imagens/brasil.jpg" alt="brasil"> 
      </button>

      <button v-else @click.prevent="traduzir()">        
        <img class="bandeira" src="@/assets/imagens/usa.png" alt="usa">
      </button>

    </div>    
  </div>

  
</template>

<script>
import { useUsuarioStore } from '../stores/autenticacao'; //pinia cookie do navegador

export default { 
  name: 'Navbar',  

  emits: ["traduzir", "cor"],

  data(){
      return{
          portugues: true,
          diurno: true,
          menu: false
      }
  },

  created(){
    this.atualiza()
  },

  methods: {
    scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  },

    atualiza(){
      const store = useUsuarioStore();

      this.portugues = store.portugues;
      this.diurno = store.diurno;
    },

    tema(){
      const store = useUsuarioStore();

      this.diurno = !this.diurno;
      store.noturno({diurno: this.diurno});
      this.$emit("cor", {cor: this.diurno});
    },

    traduzir(){
      const store = useUsuarioStore();

      this.portugues = !this.portugues;
      store.linguagem({portugues: this.portugues});
      this.$emit("traduzir", {traduzir: this.portugues});
    },

    botaoMenu(){
      this.menu = !this.menu;
    },
    
  }

}
</script>

<style src="./navbar.scss" lang="scss" scoped></style>
