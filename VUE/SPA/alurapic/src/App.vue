<template>
  <div class="corpo">
    <div>
      <meu-menu :rotas="routes"/>
    </div>
    <div>
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu' : Menu
  },
  
  data() {

    return {

      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 100%;
  }

 .pagina-enter, .pagina-leave-active {

     opacity: 0;
 }

 .pagina-enter-active, .pagina-leave-active {

     transition: opacity .4s;
 }

</style>
