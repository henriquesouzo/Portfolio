<template>
    <section id="sec1">
        <div class="sobre">          
            <div :class="{'eu': cor == false, 'eudark': cor == true}">            
                <img src="@/assets/imagens/fundocodigo.png" alt="fundo" :class="{'fundo': cor == false, 'desaparece': cor == true}">
                <img src="@/assets/imagens/fundocodigodark.png" alt="fundo" :class="{'fundo': cor == true, 'desaparece': cor == false}">

                <div class="apresentacao">        
                    <p v-if="traduzir == true">Eu sou o Henrique Souzo, Desenvolvedor de Web Sites, Aplicativos Mobile e Jogos com mais de 3 anos de experiência no ramo. 
                        Nasci no Brasil na cidade de São Paulo. Meu sonho é colaborar com sistemas que mude a vida das pessoas para melhor, inclusive a minha,
                        gerando reconhecimento nacional e internacional e poder desfrutar e compartilhar com a minha família as minhas conquistas.                
                    </p>
                    <p v-else>I'm Henrique Souzo, a Web, Mobile App, and Game Developer with over 3 years of experience. 
                        Born in São Paulo, Brazil, my dream is to create systems that improve people's lives — including my own — while earning national and international recognition. 
                        Above all, I strive to enjoy and share my achievements with my family.</p>
                </div>

                <div class="efeito">
                    <img src="@/assets/imagens/perfil.jpeg" alt="foto" class="foto">
                </div>
            </div>

            <div class="cookie" v-if="this.cookie == false">
                <h3 v-if="traduzir == true">Esse site usa cookies</h3>
                <h3 v-else>This Web Site use cookies</h3>

                <p v-if="traduzir == true">Nos utilizamos cookies para armazenar temporariamente alguns dados para melhorar sua experiência.</p>
                <p v-else>We use cookies to temporarily store some data to improve your experience.</p>

                <button v-if="traduzir == true" @click.prevent="botaoCookie()">Entendi</button>
                <button v-else @click.prevent="botaoCookie()">Understand</button>
            </div>
        </div>

    </section>
</template>

<script>
    import { useUsuarioStore } from '../stores/autenticacao'; //pinia cookie do navegador

    export default { 
    name: 'Sobre',

    props: {
        cor: true,
        traduzir: true,
    },

    data(){
        return{
            cookie: false
        }
    },

    created(){
        this.atualiza()
    },

    methods: {
        atualiza(){
            const store = useUsuarioStore();
            
            this.cookie = store.cookie;
        },

        botaoCookie(){
            const store = useUsuarioStore();

            this.cookie = true;
            store.aceitoCookie();
        }

    }

}
</script>

<style src="./sobre.scss" lang="scss" scoped></style>