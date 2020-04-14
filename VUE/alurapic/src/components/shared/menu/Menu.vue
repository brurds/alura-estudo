<template>
    <div class="nav">
      <nav >
        <ul>       
            <li v-for="rota in rotas">
              <router-link class="link" :to="rota.path ? rota.path : '/'">
                {{ rota.titulo }}
              </router-link>
            </li>
        </ul>
      </nav>
    </div>
</template>

<script>

export default {

    props: {

        rotas: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
.nav{
  background-color: #bbb;
  padding: 10px 10px 10px;
  margin: px;
  overflow: hidden;
 
}
.nav ul {
  list-style-type: none;    
  
}
.nav li{
  float: left;
  
}
.link {
  display: block ;
  padding: 0px 10px 0px;
  text-align: center;
  text-decoration: none; 
  
}

</style>