<template>
    <section id="sec1">
        <div class="sobre">          
            <div :class="{'eu': cor == false, 'eudark': cor == true}">            
                <img src="@/assets/imagens/fundocodigo.png" alt="fundo" :class="{'fundo': cor == false, 'desaparece': cor == true}">
                <img src="@/assets/imagens/fundocodigodark.png" alt="fundo" :class="{'fundo': cor == true, 'desaparece': cor == false}">

                <div class="apresentacao">        
                    <p v-if="traduzir == true">Eu sou o Henrique Souzo, tenho 28 anos, Desenvolvedor de Web Sites, Aplicativos Mobile e Jogos com mais de 4 anos de experiência no ramo. 
                        Nasci no Brasil na cidade de São Paulo. Tenho Formação de Bacharelado em Engenharia Elétrica e Técnico em Eletrônica, 
                        por isso, durante esses cursos aprendi a linguagem de programação C que é utilizada em Microprocessadores PIC, devido a isso, facilitou a minha aprendizagem em outras linguagens de programação como Javascript e C#.         
                    </p>
                    <p v-else>I'm Henrique Souzo, 28 years old, a Developer of Websites, Mobile Applications, and Games with over 4 years of experience in the field.
                    I was born in Brazil, in the city of São Paulo. I hold a Bachelor's degree in Electrical Engineering and a Technical degree in Electronics.
                    During these studies, I learned the C programming language, used in PIC microcontrollers, which made it easier for me to learn other programming languages such as JavaScript and C#.</p>
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