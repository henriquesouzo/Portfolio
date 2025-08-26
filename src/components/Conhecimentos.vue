<template>     
    <section id="sec2">

    <div class="conhecimento">
        <h1 v-if="traduzir == true">Conhecimentos</h1>
        <h1 v-else>Knowleadges</h1>
        
        <div class="icones">
            <div class="box">
                <p>NodeJS</p>
                <img src="@/assets/imagens/nodejs.svg" alt="nodejs" id="nodejs">
            </div>

            <div class="box">
                <p>JavaScript</p>
                <img src="@/assets/imagens/javascript.png" alt="javascript" id="javascript">
            </div>

            <div class="box">
                <p>VueJS</p>
                <img src="@/assets/imagens/vue.svg" alt="vue">
            </div>

            <div class="box">
                <p>Sass</p>
                <img src="@/assets/imagens/sass.svg" alt="sass">
            </div>

            <div class="box">
                <p>Bootstrap</p>
                <img src="@/assets/imagens/bootstrap.png" alt="Bootstrap">
            </div>

            <div class="box">
                <p>Socket.io</p>
                <img src="@/assets/imagens/socket.png" alt="javascript" id="socket">
            </div>

             <div class="box">
                <p>Unity</p>
                <img src="@/assets/imagens/unity.svg" alt="unity">
            </div>

            <div class="box">
                <p>C#</p>
                <img src="@/assets/imagens/logoC.png" alt="c" id="logoc">
            </div>

            <div class="box">
                <p>MySQL</p>
                <img src="@/assets/imagens/mysql.svg" alt="mysql" id="mysql">
            </div>

             <div class="box">
                <p>MongoDB</p>
                <img src="@/assets/imagens/mongodb.svg" alt="mongodb">
            </div>

            <div class="box">
                <p>PostgreSQL</p>
                <img src="@/assets/imagens/postgresql.svg" alt="postgresql">
            </div>
        </div>
    </div>

    </section>
</template>

<script>
    export default { 
    name: 'Sobre',

    props: {
        cor: true,
        traduzir: true,
    }
}
</script>

<style src="./conhecimentos.scss" lang="scss" scoped></style>