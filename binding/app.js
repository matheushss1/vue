const app = Vue.createApp({
    data () {
        return {
            courseGoal: 'Não tenho a menor ideia!',
            vueLink: 'https://vuejs.org',
            testeComDadosA: 'Deu menor que meio',
            testeComDadosB: 'Deu maior que meio',
            tagStrong: "<strong>Uma tag strong jogada por Vue (CUIDADO COM CROSS-SCRIPTS)</strong>"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 'Copo meio vazio';
            } else {
                return 'Copo meio cheio';
            }
        },
        jogandoDados() {
            const stringAleatoria = Math.random();
            if(stringAleatoria < 0.5){
                return this.testeComDadosA;
            } else {
                return this.testeComDadosB;
            }
        }
    }
});

app.mount('#user-goal');