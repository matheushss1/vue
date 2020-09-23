<template>
  <principal>
    <span slot="esquerdo">
      <div class="row valign-wrapper">
        <grid-vue tamanho="4">
          <img src="https://materializecss.com/images/yuna.jpg" alt class="circle responsive-img" />
          <!-- notice the "circle" class -->
        </grid-vue>
        <grid-vue tamanho="8">
          <span class="black-text">
            <h5>Maria</h5>Add the "circle" class to it to make it appear circular.
          </span>
        </grid-vue>
      </div>
    </span>
    <span slot="direito">
      <publicar-conteudo-vue />
      <card-conteudo-vue
        perfil="https://materializecss.com/images/yuna.jpg"
        nome="Maria Silva"
        data="22/09/2020 13:30"
      >
        <card-detalhe-vue
          img="https://materializecss.com/images/sample-1.jpg"
          titulo="Titulo da Publicação"
          txt="ESSE É O TEXTO DA PUBLICAÇÃO, PODE SER UM TEXTO GIGANTE BLA BLA BLA NÃO SEI O QUE ESCREVER BLÁ BLÁ BLÁ VUE EH MT DAORA"
        />
      </card-conteudo-vue>
    </span>
  </principal>
</template>
  
<script>
import Principal from "@/templates/Principal";
import CardConteudoVue from "@/components/social/CardConteudoVue";
import CardDetalheVue from "@/components/social/CardDetalheVue";
import PublicarConteudoVue from "@/components/social/PublicarConteudoVue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Principal,
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudoVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
