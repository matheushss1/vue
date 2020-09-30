<template>
<div class="row">
  <div class="card">
    <div class="card-content">
      <div class="row valign-wrapper">
        <grid-vue tamanho="1">
          <img :src="perfil" :alt="nome" class="circle responsive-img" />
          <!-- notice the "circle" class -->
        </grid-vue>
        <grid-vue tamanho="11">
          <span class="black-text">
            <strong>{{nome}}</strong> -
            <small>{{data}}</small>
          </span>
        </grid-vue>
      </div>
      <slot />
      <div class="card-content">
        <p>
          <i class="small material-icons">favorite_border</i>
          <i class="small material-icons">chat</i>
        </p>
      </div>
      <grid-vue tamanho="8">
        <router-view />
      </grid-vue>
    </div>
  </div>
</div>
</template>
<script>
import GridVue from "@/components/layouts/GridVue";
export default {
  name: "CardConteudoVue",
  props: ['perfil', 'nome', 'data'],
  components: {
    GridVue,
  },
};
</script>