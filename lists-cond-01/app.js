const app = Vue.createApp({
  data() {
    return {
      eneteredValue: "",
      goals: []
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.eneteredValue);
    },
    removeGoal(index){
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');

