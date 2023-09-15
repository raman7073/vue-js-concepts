<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">{{ isFavorite ? 'Show' : 'Hide' }} Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete',id)">Delete</button>
  </li>
</template>

<script>
export default {
  //we can't mutate props in child class as data flow unidirectional only in vue
  // props:['name','phoneNumber','emailAddress'],
  // props are there to send data into the components and events are there to send data out of components
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: { type: Boolean, required: true, default: false }

  },
  emits: ['toggle-favorite','delete'],
  //this is recommended it's not necessary to write about emits
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       //warn('id is missing');
  //       alert('id is missing');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  },
};
</script>