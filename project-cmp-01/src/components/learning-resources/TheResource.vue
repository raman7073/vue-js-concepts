<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')" :mode=storedResButtonMode>Stored Resource</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>
<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResource, AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resource',
            storedResources: [
                {
                    id: 'nial',
                    title: 'Official Docs',
                    description: 'The Official Vue JS Documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'nial-g',
                    title: 'Google',
                    description: 'Learn Vue From Google',
                    link: 'https://google.org'
                }
            ]
        };
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resource' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, desc, url) {
            const newRes = {
                id: new Date().toISOString(),
                title: title,
                description: desc,
                link: url
            }
            this.storedResources.unshift(newRes);
            this.selectedTab = 'stored-resource';
        },
        removeResource(resId) {
            /*
            here original array won't get affect in memory and it will not lead to change in UI,
            this.storedResources = this.storedResources.filter(res=> resId!==res.id);
            */
            const idx = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(idx, 1);
        }
    }

}
</script>