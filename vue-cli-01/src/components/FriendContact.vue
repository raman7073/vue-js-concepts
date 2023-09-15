<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ detailsVisible ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>
<script>
export default {
    data() {
        return {
            detailsVisible: false,
            friend:
            {
                id: 'manuel',
                name: 'Raman Mehta',
                phone: '7986918766',
                email: 'rmnrck@gmail.com'
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
};
</script>