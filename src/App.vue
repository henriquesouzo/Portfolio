<template>
  <router-view/>
</template>

<style>
* {
    padding: 0;
    margin: 0;    
    font-family:cursive;
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
