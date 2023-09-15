const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Raman Mehta',
                    phone: '9187663342',
                    email: 'rmnrck@gmail.com'
                },
                {
                    id: 'raman',
                    name: 'Aman Mehta',
                    phone: '9874329432',
                    email: 'patya@gmail.com'
                }
            ]
        };
    }
});
// putting data and methods specific to components,mini app


app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">{{detailsAreVisible ?'Hide Deatils':'Show Details'}}</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{friend.phone}}</li>
          <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
      </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Raman Mehta',
                phone: '9187663342',
                email: 'rmnrck@gmail.com'
            }
        };

    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');