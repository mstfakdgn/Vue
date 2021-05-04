<template>
  <base-dialog :show="!!error" title="Error" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="loadFilteredCoaches"></coach-filter>
  </section>
  <section>
    <base-card v-if="!isLoading">
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches('refresh')">Refresh</base-button>
        <base-button
          v-if="!isCoach && !isLoading"
          link
          to="/register"
          :disabled="isCoach"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="hasCoaches">
        <ul>
          <coach-item
            v-for="coach in coaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
      </div>
      <!-- <div v-else-if="!isCoach && !hasCoaches">
        <p>There is No Available Coach</p>
      </div> -->
    </base-card>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
    BaseDialog
  },
  data() {
    return {
      isLoading: true,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods: {
    loadFilteredCoaches(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(type) {
      this.isLoading = true;

      try {
        await this.$store.dispatch('coaches/setCoaches', type);
      } catch (error) {
        this.error = error.message || 'Error';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadCoaches();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
