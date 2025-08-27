<template>
  <div class="home">
    <Navbar @cor="tema($event)" @traduzir="traduz($event)" />

    <Sobre :cor="cor" :traduzir="traduzir"/>

    <Conhecimentos :cor="cor" :traduzir="traduzir" />
   
    <Projetos :cor="cor" :traduzir="traduzir" />

    <Contato :cor="cor" :traduzir="traduzir" />
  </div>
</template>

<script>
import { useUsuarioStore } from '../stores/autenticacao'; //pinia cookie do navegador

import Navbar from '@/components/Navbar.vue'
import Sobre from '@/components/Sobre.vue';
import Conhecimentos from '@/components/Conhecimentos.vue';
import Projetos from '@/components/Projetos.vue';
import Contato from '@/components/Contato.vue';

export default {
  name: 'Home',

  data(){
    return{
      cor: false,
      traduzir: false,
    }
  },

  created(){
      this.atualiza()
  },

  components: {
    Navbar,
    Sobre,
    Conhecimentos,
    Projetos,
    Contato
  },

  methods: {
    atualiza(){
        const store = useUsuarioStore();

        this.traduzir = store.portugues;
        this.cor = store.diurno;
    },

    traduz(dado){
      //console.log(dado);
      this.traduzir = dado.traduzir;
      //console.log(this.traduzir);
    },

    tema(dado){
      this.cor = dado.cor;
    }
  }
}
</script>
