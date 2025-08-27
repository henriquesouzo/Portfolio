<template>
  <router-view/>
</template>

<style>
@font-face {
  font-family: 'ComicSansCustom';
  src: url('@/assets/fonts/comic.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
    padding: 0;
    margin: 0;    
    font-family: "ComicSansCustom", cursive;
    box-sizing: border-box; /* limita os elementos filho na medida maxima do pai, sem passar */
  }

  html, body {
    scroll-behavior: smooth; /* Ativa o scroll suave */
  }
  
::-webkit-scrollbar{
    background-color: transparent;
    width: 0.5rem;
}

::-webkit-scrollbar-thumb{
    background-color: rgb(3, 3, 59);
    border-radius: 1rem;
}
</style>
