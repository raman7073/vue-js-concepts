<template>
    <h3>{{ finalCounter }}</h3>
</template>
<script>
 import { mapGetters  } from "vuex";
 export default{
   
    computed:{
        //using getters for getting data
        // counter(){
        //     return this.$store.getters.finalCounter;
        // }
        //A better way to use getters
        ...mapGetters(['finalCounter'])
    }
 }
</script>