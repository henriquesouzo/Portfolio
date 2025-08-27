<template>
    <section id="sec4">

    <div class="contato">
        <h1 v-if="traduzir == true">Contato</h1>
        <h1 v-else>Contact</h1>

        <div class="dados">
            <div class="email">
                <img src="@/assets/imagens/email.svg" alt="email">
                <h2>E-mail</h2>
                <p>Entre em contato por e-mail.</p>
                <a class="email" href="mailto:hsprograma@gmail.com?subject=Orçamento&body=Escreva sua mensagem aqui." target="_blank">
                    hsprograma@gmail.com
                </a>
            </div>

            <div class="email">
                <img src="@/assets/imagens/telefone.svg" alt="telefone">
                <h2 v-if="traduzir == true">Telefone</h2>
                <h2 v-else>Phone</h2>
                <p v-if="traduzir == true">Entre em contato por telefone ou Whatsapp.</p>
                <p v-else>Get in touch by phone or WhatsApp.</p>
                <a class="email" href="https://wa.me/5511978404500?text=Olá!" target="_blank">
                    +55 11 97840-4500
                </a>
            </div>

            <div class="email">
                <img src="@/assets/imagens/redes.svg" alt="redes">
                <h2 v-if="traduzir == true">Redes Sociais</h2>
                <h2 v-else>Social Media</h2>
                <p v-if="traduzir == true">Minhas redes sociais: Facebook, Instagram, LinkedIn ou GitHub.</p>
                <p v-else>Connect with me on Facebook, Instagram, LinkedIn or GitHub.</p>
                <div class="icones">
                    <a class="email" href="https://www.facebook.com/souzohenrique" target="_blank">
                        <img class="icone" src="@/assets/imagens/facebook.svg" alt="facebook">
                    </a>

                    <a class="email" href="https://www.instagram.com/souzohenrique" target="_blank">
                        <img class="icone" src="@/assets/imagens/instagram.svg" alt="instagram">
                    </a>

                    <a class="email" href="https://www.linkedin.com/in/henrique-souzo-791100243" target="_blank">
                        <img class="icone" src="@/assets/imagens/linkedin.svg" alt="linkedin">
                    </a>

                    <a class="email" href="https://github.com/henriquesouzo" target="_blank">
                        <img class="icone" src="@/assets/imagens/github.svg" alt="github">
                    </a>
                </div>
            </div>
        </div>
    </div>

    </section>
</template>

<script>
    export default { 
    name: 'Contato',

    props: {
        cor: true,
        traduzir: true,
    }
}
</script>

<style src="./contato.scss" lang="scss" scoped></style>