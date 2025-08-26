<template>
    <section id="sec3">
        <div :class="{'projetos': cor == false, 'projetosdark': cor == true}">
            <h1 v-if="traduzir == true">Projetos</h1>
            <h1 v-else>Works</h1>

            <div class="cards" v-if="trabalhos.length > 0">
                <button class="card" v-for="(site, index) in trabalhos" :key="index" @click.prevent="mostraProjeto(site)">
                    <img :src="site.fotos[0]" alt="foto">
                    <h2 v-if="traduzir == true">{{ site.titulo }}</h2>
                    <h2 v-else>{{ site.titulotraduzido }}</h2>
                </button>
            </div>

            <div class="trabalho" v-if="projeto != null">      
                <div class="itens">
                    <button class="fechar" @click.prevent="fechaProjeto()"> x </button>
                    
                    <button :class="{'esquerda': fotoAtual != 0, 'desaparece': fotoAtual == 0}" @click.prevent="fotoAtual -= 1"> < </button>
                    <img :src="projeto.fotos[fotoAtual]" alt="fotoProjeto" class="fotoItem">
                    <button :class="{'direita': fotoAtual < (quantidadeFotos - 1), 'desaparece': fotoAtual == (quantidadeFotos - 1)}" @click.prevent="fotoAtual += 1"> > </button>
                    
                    <p class="descricao" v-if="traduzir == true">{{projeto.descricao}}</p>
                    <p class="descricao" v-else>{{projeto.descricaotraduzido}}</p>
                </div>      
            </div>
        </div>
    </section>
</template>

<script>
    import {sites} from "@/dados/db";

    export default { 
    name: 'Projetos',

    props: {
        cor: true,
        traduzir: true,
    },

    data(){
        return{
            trabalhos: [],
            projeto: null,
            quantidadeFotos: 0,
            fotoAtual: 0
        }
    },

    created(){
        this.recebeTrabalhos()
    },

    methods: {
        recebeTrabalhos(){
            //console.log(sites);

            this.trabalhos = sites;
        },

        mostraProjeto(item){
            /* console.log(item);
            console.log(item.fotos.length); */
            this.projeto = item;
            this.quantidadeFotos = item.fotos.length;           
        },

        fechaProjeto(){
            this.projeto = null;
            this.quantidadeFotos = 0;
            this.fotoAtual = 0;
        }

    }

}
</script>

<style src="./projetos.scss" lang="scss" scoped></style>