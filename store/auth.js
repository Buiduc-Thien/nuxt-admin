import {fetchUserProfile, sendDataToServer} from "~/helpers/authentication";


export default {
  state: () => ({
    accessToken: '',
    user: {}
  }),
  
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
    },
    setRedirectPath(state, redirectPath) {
      state.redirectPath = redirectPath
    },
    clearAccessToken(state) {
      localStorage.removeItem('accessToken')
      state.accessToken = null
      state.user = {}
    }
  },

  actions: {
    registerWithGoogleFirebase({commit}) {
      commit('clearAccessToken')
      const googleAuthProvider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithRedirect(googleAuthProvider)
    },
    registerWithFacebookFirebase({commit}) {
      commit('clearAccessToken')
      const facebookAuthProvider = new this.$fireModule.auth.FacebookAuthProvider()
      this.$fire.auth.signInWithRedirect(facebookAuthProvider)
    },
    handleRedirectResultFireBase({commit}) {
      this.$fire.auth.getRedirectResult()
        .then((result) => {
          if (result.user !== null) {
            const user = result.user?.providerData[0];
            const data = {
              provider: user.providerId,
              name: user.displayName,
              email: user.email,
              email_verified: result.user.emailVerified,
              avatar: user.photoURL,
              uid: user.uid,
            };
            sendDataToServer(this.$axios, data)
              .then((response) => {
                commit('setUser', {
                  name: response.user.name,
                  email: response.user.email,
                  photoURL: response.user.photoURL,
                  emailVerified: response.user.avatar,
                  roleId: response.user.role_id,
                })
                localStorage.setItem('accessToken', response.access_token)
                commit('setAccessToken', {
                  accessToken: response.access_token
                })
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAccessTokenLocalStorage({commit}, accessToken) {
      commit('setAccessToken', {
        accessToken: accessToken
      })
    },
    fetchUserProfile({commit}) {
      fetchUserProfile(this.$axios)
    }
  }
}
