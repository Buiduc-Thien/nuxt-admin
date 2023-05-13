import sendDataToServer from "~/helpers/authentication";

export default {
  state: () => ({
    user: {}
  }),

  getters: {
    // ...
  },

  mutations: {
    setUser(state, user) {
      state.user = user
      console.log(state.user)
    }
  },

  actions: {
    registerWithGoogleFirebase({commit}) {
      const googleAuthProvider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithRedirect(googleAuthProvider)
    },
    registerWithFacebookFirebase({commit}) {
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
              })
              .catch((error) => {
                console.log(error)
              })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
