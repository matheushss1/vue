<template>
  <span>
    <header>
      <nav-bar logo="LOGO" url="#" cor="blue" />
    </header>
    <main>
      <div class="container row">
        <grid-vue tamanho="4">
          <card-menu-vue>
            <div class="row valign-wrapper">
              <grid-vue tamanho="4">
                <img
                  src="https://materializecss.com/images/yuna.jpg"
                  alt
                  class="circle responsive-img"
                />
                <!-- notice the "circle" class -->
              </grid-vue>
              <grid-vue tamanho="8">
                <span class="black-text">
                  <h5>Maria</h5>Add the "circle" class to it to make it appear circular.
                </span>
              </grid-vue>
            </div>
          </card-menu-vue>
        </grid-vue>
        <grid-vue tamanho="8">
          <router-view />
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
  name: "App",
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
