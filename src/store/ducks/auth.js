const INITIAL_STATE = {
  loading: false,
  error: false,
  token: localStorage.getItem('@at:atpin') || false,
  isCoreTeam: false
}

export const Types = {
  SIGN_IN_REQUEST: 'auth/REQUEST',
  SIGN_IN_LINKEDIN_REQUEST: 'auth/LINKEDIN_REQUEST',
  SIGN_IN_SUCCESS: 'auth/SUCCESS',
  SIGN_IN_FAILURE: 'auth/FAILURE',
  SIGN_OUT: 'auth/SIGN_OUT'
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true }
    case Types.SIGN_IN_SUCCESS:
      const { token, isCoreTeam } = action.payload
      return {
        ...state,
        loading: false,
        isCoreTeam: isCoreTeam,
        token: token
      }
    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }
    case Types.SIGN_OUT:
      return {
        ...state,
        token: false,
        isCoreTeam: false
      }
    default:
      return state
  }
}

export const Creators = {
  signInRequest: ({ user, password }) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { user, password }
  }),
  signInLinkedinRequest: ({ code }) => ({
    type: Types.SIGN_IN_LINKEDIN_REQUEST,
    payload: { code }
  }),
  signInSuccess: data => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: {
      token: data.token,
      isCoreTeam: data.isCoreTeam
    }
  }),
  signInFailure: ({ type, message }) => ({
    type: Types.SIGN_IN_FAILURE,
    payload: { type, message }
  }),
  signOut: () => ({
    type: Types.SIGN_OUT,
    payload: {}
  })
}
