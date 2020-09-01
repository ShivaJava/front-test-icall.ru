const status = {
  listen: 'listen',
  request: 'request',
  success: 'success',
  error: 'error'
}

const _request = '_request'
const _success = '_success'
const _error = '_error'

const GET_API_DATA = 'GET_API_DATA'

const GET_STATUS = 'GET_STATUS'
const GET_ERROR = 'GET_ERROR'
const GET_DATA = 'GET_DATA'

const namespaced = true

const state = {
  status: status.listen,
  error: null,
  data: []
}

const mutations = {
  [_request] (state) {
    state.status = status.request
  },
  [_success] (state, data) {
    state.status = status.success
    state.data = data.data
  },
  [_error] (state, error) {
    state.status = status.error
    state.error = error
  }
}

const actions = {
  async [GET_API_DATA] ({ commit }) {
    commit(_request)
  }
}

const getters = {
  [GET_STATUS]: state => state.status,
  [GET_ERROR]: state => state.error,
  [GET_DATA]: state => state.data
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
