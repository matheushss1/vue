const app = Vue.createApp({
    data () {
        return {
            boxAselecionado: false,
            boxBselecionado: false,
            boxCselecionado: false
        }
    },
    methods: {
        boxSelecionado(box){
            if(box === 'A'){
                this.boxAselecionado = !this.boxAselecionado;
            } else if(box === 'B') {
                this.boxBselecionado = !this.boxBselecionado;
            } else if(box === 'C') {
                this.boxCselecionado = !this.boxCselecionado;
            }
        },
    },
});
app.mount("#styling");