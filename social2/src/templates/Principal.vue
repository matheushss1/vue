<template>
  <span>
    <header>
      <nav-bar logo="Home" url="/" cor="blue">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
                <li>
          <router-link to="/cadastro">Cadastre-se</router-link>
        </li>
      </nav-bar>
    </header>
    <main>
      <div class="container row">
        <grid-vue tamanho="4">
          <card-menu-vue>
            <slot name="esquerdo" />
          </card-menu-vue>
        </grid-vue>
        <grid-vue tamanho="8">
          <slot name="direito" />
        </grid-vue>
      </div>
    </main>
    <footer-vue>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Home</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 2</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 3</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 4</a>
      </li>
    </footer-vue>
  </span>
</template>

<script>
import FooterVue from "@/components/layouts/FooterVue";
import NavBar from "@/components/layouts/NavBar";
import GridVue from "@/components/layouts/GridVue";
import CardMenuVue from "@/components/layouts/CardMenuVue";
export default {
  name: "Principal",
  components: {
    NavBar,
    FooterVue,
    GridVue,
    CardMenuVue,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
