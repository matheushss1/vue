const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  //não usar diretamente no template
  //permite rodar um código em reação à mudança de determinado dado
  //por exemplo enviar http request, setar um timer
  //usar para qualquer atualização de "não-dados"
  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
  },
  // usar para data binding pois só vai atualizar quando os valores dentro do computed forem alterados
  //usar para dados que dependem de outros dados
  computed: {
    fullName() {
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  //usar methods para event bind ou data bind
  //também usar quando eventos ou dados precisam ser atualizados o tempo todo
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    reduce(){
      this.counter = this.counter + 1;
    },
    addWithArgs(num) {
      this.counter = this.counter + num;
    },
    reduceWithArgs(num){
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Oi, eu sou um alerta!')
    },
    resetName() {
      this.name = '';
    }
  }
});

app.mount('#events');
