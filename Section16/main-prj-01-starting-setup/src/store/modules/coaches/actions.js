export default {
  async createCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id:userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-tutorials-d6f6d-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('createCoach', {
      ...coachData,
      id: userId
    });
  },
  async setCoaches(context, payload = 'main') {
    if (!context.getters.shouldUpdate && payload != 'refresh') {
      return;
    }
    const response = await fetch(
      `https://vue-tutorials-d6f6d-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id:responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
