<template>
    <button @click="inc">Add 1</button>
    <button @click="increase({value:10})">Add 1</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
   methods:{

    // addOne(){
      // dispatching actions
    //     this.$store.dispatch('increment');
    // }
    // a better way to dispatching actions
    // ...mapActions(['increment','increase'])
    // A more better way
    ...mapActions({
      inc:'increment',
      increase:'increase'
    })
  }
}
</script>