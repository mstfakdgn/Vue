export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0 ? true : false;
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;

        // returns true if at least one of them is true
        console.log(userId);
        console.log(coaches);
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimestamp = new Date().getTime();

        // return true if it is more than a minute ago
        return (currentTimestamp - lastFetch) / 1000 > 60;
    }
}; 
