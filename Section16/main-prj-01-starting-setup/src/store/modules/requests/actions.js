export default {
  async createRequest(context, data) {
    const id = new Date().toISOString();
    const requestData = {
      coachId: data.coachId,
      email: data.email,
      message: data.message
    };
    console.log(id);
    const response = await fetch(
      `https://vue-tutorials-d6f6d-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(requestData)
      }
    );
    const responseData = await response.json();

    requestData.id = response.name;
    
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed');
      throw error;
    }

    context.commit('createRequest', requestData);
  },
  async setRequests(context, ) {
    const coachId = context.rootGetters.userId;
    
    const response = await fetch(
      `https://vue-tutorials-d6f6d-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const requestData = {
        id: responseData[key].id,
        coachId: responseData[key].coachId,
        email: responseData[key].email,
        message: responseData[key].message
      };
      requests.push(requestData);
    }
    context.commit('setRequests', requests);
  }
};
