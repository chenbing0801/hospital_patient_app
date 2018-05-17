const state = {
  CurPatient: {},
  loginStatus: 'no',
  registerStatus: 'no'
}

const getters = {
  loginStatus: state => state.loginStatus,
  CurPatient: state => state.CurPatient
}

const actions = {
  login ({ commit }) {
    console.log('login.js-' + 'login')
  }
}

export default {
  state,
  getters,
  actions
}
