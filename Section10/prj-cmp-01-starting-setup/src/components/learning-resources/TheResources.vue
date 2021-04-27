<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      ></base-card
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  provide() {
    return {
      resources: this.storedResources,
      addResourceMethod: this.addResourceMethod,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? 'flat' : '';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? 'flat' : '';
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResourceMethod(url, description, title) {
      const ResourseObject = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        url: url
      };
      this.storedResources.unshift(ResourseObject);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resourceId) {
      // this.storedResources = this.storedResources.filter(
      //   resource => resource.id !== resourceId
      // );
      // console.log(this.storedResources);
      const resIndex = this.storedResources.findIndex(res => res.id === resourceId);
      this.storedResources.splice(resIndex, 1);
    
    }
  }
};
</script>
