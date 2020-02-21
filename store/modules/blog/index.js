import { login, getUser } from '~/api/api';
import { setToken, removeToken, getCookie } from '~/util/auth';
import vue from 'vue';

const state = {
  drawer: false,
  token: '',
  userinfo: ''
};
const getters = {};

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
  set_token: (state, payload) => {
    setToken(payload);
    state.token = payload;
  },
  logout: state => {
    removeToken();
    state.token = '';
    state.userinfo = '';
  },
  set_user_info: (state, payload) => (state.userinfo = payload)
};

const actions = {
  async setUserinfo({ commit }, pramas) {
    const result = await getUser(pramas);
    if (result.code === 0) {
      commit(SET_USER_INFO, userinfo);
    } else {
      vue.$message.err(result.message);
    }
  },

  nuxtServerInit({ commit }, { req }) {
    console.log(req.headers);
    if (req.headers.cookie) {
      try {
        const Token = getCookie(req.headers.cookie);
        console.log(Token, 'Token');
        commit(set_token, Token);
      } catch (error) {
        console.log(error, 'err');
      }
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
