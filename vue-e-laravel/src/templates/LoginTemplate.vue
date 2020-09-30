<template>
  <span>
    <header>
      <nav-bar logo="Login" url="/" cor="blue">
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
        <grid-vue tamanho="8">
          <card-menu-vue>
            <slot name="esquerdo" />
          </card-menu-vue>
        </grid-vue>
        <grid-vue tamanho="4">
          <slot name="direito" />
        </grid-vue>
      </div>
    </main>
    <footer-vue />
  </span>
</template>

<script>
import FooterVue from "@/components/layouts/FooterVue";
import NavBar from "@/components/layouts/NavBar";
import GridVue from "@/components/layouts/GridVue";
import CardMenuVue from "@/components/layouts/CardMenuVue";
export default {
  name: "LoginTemplate",
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
