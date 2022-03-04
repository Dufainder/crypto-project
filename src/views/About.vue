<template>
  <div class="flex-col items-center">
    <div>
      <img
        class="border-2 border-green-600 "
        src="@/assets/me.png"
        alt="Myself"
      />
    </div>
    <h1>Dufainder Bedoya</h1>
    <p class="text-gray-500 text-xl text-center">
      Hola soy FullStack web Developer y me encanta que estes aquí. Espero
      conocerte pronto!! en la cabecera encontrarar mis redes.
      <br />
      Proyecto para obtener las cotizaciones de las cryptomonedas mas
      importantes de mundo a traves de la API REST de Coincap.
      Tecnologias:Node.js, JavaScript, Vue2, Tailwind.Este proyecto es utilizado
      para poner en prueba mis conocimientos y habilidades de Vue2.js
    </p>

    <router-link to="/" class="mt-6 text-xl text-green-600 hover:underline"
      >Volver a la pagina de Inicio</router-link
    >
  </div>
</template>
<style scoped>
img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
h1 {
  color: aqua;
  font-size: 60px;
}
.image {
  border-color: cyan;
}
</style>
