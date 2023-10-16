<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input placeholder="First Name" type="text" v-model="firstName" />
      <input placeholder="Last Name" type="text" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
export default {
  setup() {

    /* 
     const userName = ref("Raman");//reactive value
     setTimeout(function(){
       userName.value = 'Nial';
     },2000);
      
     return {userName};
    */
    /*
     const user = ref({
       name: 'Raman',
       age:24
     });
     ref won't work with objects for changing value with setTimeout
     setTimeout(function () {
       user.value.name = 'NiaL';
 
     }, 2000);
     return { userName:user.value.name, age:user.value.age };
     This will work only when we pass raw reactive object. 
     */
    //reactive are made specially there for objects,refs are there for all kind of values
    // const user = reactive({
    //   name: 'Raman',
    //   age: 24
    // });
    /*
    setTimeout(function () {
      user.name = 'NiaL';

    }, 2000);
    */
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(21);
    function setNewAge() {
      age.value = 32;
    }
    // function setFirstName(event) {
    //       firstName.value = event.target.value;
    // }
    // function setLastName(event) {
    //       lastName.value = event.target.value;
    // }
    const userName = computed(function () { 
      return firstName.value + " " + lastName.value;
    });
    watch(age, function (newVal, oldVal) {
      console.log("New Age :" + newVal);
      console.log("Old Age :" + oldVal);

    });
    return { age, setNewAge, userName, lastName, firstName };
  }
  /* Options API
   data() {
    return {
      userName: 'Raman',
    };
  },
  */
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>