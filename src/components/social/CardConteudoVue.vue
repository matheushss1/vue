<template>
  <div class="card">
    <div class="card-content">
          <div class="row valign-wrapper">
            <grid-vue tamanho="1">
              <img
                src="https://materializecss.com/images/yuna.jpg"
                alt
                class="circle responsive-img"
              />
              <!-- notice the "circle" class -->
            </grid-vue>
            <grid-vue tamanho="11">
              <span class="black-text">
                <strong>Maria</strong>
              </span>
            </grid-vue>
          </div>
      <grid-vue tamanho="8">
        <router-view />
      </grid-vue>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</template>
<script>
import GridVue from "@/components/layouts/GridVue"
export default {
  name: "CardConteudoVue",
  props: [],
  components: {
    GridVue
  }
};
</script>