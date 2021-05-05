let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'login' });
  },
  async signup(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'signup' });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB86Rzo5gOqohwGlcb2sANywKfH_z9unXc';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB86Rzo5gOqohwGlcb2sANywKfH_z9unXc';
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    // expire date calculation
    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn; 

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to sign in');
      throw error;
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('expirationTime', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('loginUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationTime = localStorage.getItem('expirationTime');

    const expiresIn = +expirationTime - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && expirationTime) {
      context.commit('setUser', {
        token:token,
        userId:userId,
      });
    }
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('didAutoLogout');
  }
};
