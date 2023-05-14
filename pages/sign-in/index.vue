<template>
  <div class="wrap-sign-in d-flex align-items-center justify-content-center">
    <div class="popup-sign-in p-5 d-flex flex-column justify-content-center align-items-center" data-aos="zoom-in">
      <div class="popup-sign-in__title d-flex flex-column justify-content-center align-items-center">
        <h5 class="fw-semibold mb-2 text-black">You must Sign In to Join</h5>
        <p class="color-secondary-sign-in mb-0 fs-7">
          We're A Team That Guides Each Other
        </p>
      </div>
      <div class="popup-sign-in__method d-flex flex-column justify-content-center align-items-center w-100">
        <button class="btn-login-with-social" @click="registerWithGoogleFirebase()">
          <img alt="Google Icon" class="me-3" src="@/assets/images/svg-i/google.svg">
          Sign in with Google
        </button>
        <button class="btn-login-with-social mt-12px" @click="registerWithFacebookFirebase()">
          <img alt="Facebook Icon" class="me-3" src="@/assets/images/svg-i/facebook.svg">
          Sign in with Facebook
        </button>
      </div>
      <div class="popup-sign-in__line d-flex align-items-center justify-content-center">
        <div
          class="popup-sign-in__line__element color-secondary-sign-in fs-7 fw-medium d-flex align-items-center justify-content-between">
          Or
        </div>
      </div>
      <div class="popup-sign-in__form w-100">
        <form action="">
          <div class="form__input input-admin--custom input__username"
               v-bind:class="{'has-value' : formAction.email !== ''}">
            <input v-model="formAction.email" class="fw-semibold" name="userName" placeholder="Uname@gmail.com" required
                   type="text">
            <svg
              class=""
              height="18"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="18"
              x="0"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svgjs="http://svgjs.com/svgjs"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              y="0">
            <g>
              <path
                class=""
                d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"
                data-original=""
                fill=""></path>
            </g>
          </svg>
          </div>
          <div class="form__input input-admin--custom input__password"
               v-bind:class="{'has-value' : formAction.password !== ''}">
            <input v-model="formAction.password" name="password" placeholder="Password" required
                   v-bind:type="formAction.showPassword ? 'text' : 'password'">
            <span :class="formAction.showPassword ? 'show' : ''" class="show-password-icon" @click="showPassword()">
            </span>
            <svg
              height="18"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 32 32"
              width="18"
              x="0"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svgjs="http://svgjs.com/svgjs"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              y="0">
            <g>
              <path
                d="M16 32c-.143 0-.286-.03-.419-.092l-2.995-1.382C6.156 27.558 2 21.063 2 13.98V4a1 1 0 0 1 .887-.994 58.352 58.352 0 0 0 5.898-.983A58.32 58.32 0 0 0 15.666.057c.216-.076.452-.076.667 0a58.323 58.323 0 0 0 6.882 1.966c1.938.427 3.923.758 5.898.983A1 1 0 0 1 30 4v9.981c0 7.083-4.155 13.577-10.586 16.545l-2.995 1.382A1.004 1.004 0 0 1 16 32zM4 4.886v9.095a16.27 16.27 0 0 0 9.424 14.729L16 29.897l2.576-1.189A16.27 16.27 0 0 0 28 13.981V4.886A60.332 60.332 0 0 1 16 2.06 60.326 60.326 0 0 1 4 4.885z"
                data-original=""
                fill=""></path>
              <path
                d="M20 23h-8c-1.103 0-2-.897-2-2v-7c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2zm-8-9v7h8.002L20 14z"
                data-original=""
                fill=""></path>
              <path
                d="M19 14h-6a1 1 0 0 1-1-1v-2c0-2.206 1.794-4 4-4s4 1.794 4 4v2a1 1 0 0 1-1 1zm-5-2h4v-1c0-1.103-.897-2-2-2s-2 .897-2 2z"
                data-original=""
                fill=""></path>
            </g>
          </svg>
          </div>
          <div class="form__forgot-password text-end mt-2">
            <nuxt-link class="fs-7 fw-medium color-primary fw-semibold" to="/forgot-password">Forgot password ?
            </nuxt-link>
          </div>
          <div class="form__action mt-3">
            <button class="btn-primary d-flex align-items-center justify-content-center">
              <span>Sign in with Your Account</span>
              <v-progress-circular :size="20" :width="3" indeterminate></v-progress-circular>
            </button>
          </div>
        </form>
      </div>
      <div class="popup-sign-in__sign-up fs-7 color-secondary-sign-in fw-semibold">
        Don't have account?
        <nuxt-link class="fw-medium color-primary fw-semibold" to="/sign-up">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import sendDataToServer from "~/helpers/authentication";

export default {
  data() {
    return {
      formAction: {
        email: "",
        password: "",
        showPassword: false,
      }
    }
  },
  methods: {
    showPassword() {
      this.formAction.showPassword = !this.formAction.showPassword;
    },
    registerWithGoogleFirebase() {
      this.$store.dispatch('auth/registerWithGoogleFirebase');
    },
    registerWithFacebookFirebase() {
      this.$store.dispatch('auth/registerWithFacebookFirebase');
    },
  },
  created() {
    this.$store.dispatch('auth/handleRedirectResultFireBase');
    if (process.client) {
      const accessToken = localStorage.getItem('accessToken')
      const role = this.$store.state.auth.user.roleId
      const setRedirectPath = this.$store.state.auth.redirectPath
      if (accessToken) {
        this.$store.dispatch('auth/getAccessTokenLocalStorage', accessToken);
        this.$router.push(setRedirectPath)
      }
    }
  },
  mounted() {
    this.$toast.success('Nội dung toast thành công',  {
      icon: {
        iconClass: "material-icons", // Optional
        iconChildren: "done", // Optional
        iconTag: "done", // Optional
      },
    });
  }
}

</script>
<style lang="scss" scoped>
.wrap-sign-in {
  height: 100vh;
  background-color: var(--bg-sign-in);

  .popup-sign-in {
    background-color: var(--bg-white);
    width: 364px;
    border-radius: 6px;

    &__method {
      margin: 20px 0;
    }

    &__line {
      &__element {
        position: relative;

        &::before {
          background: var(--border-color-secondary);
          bottom: 45%;
          content: "";
          left: 24px;
          height: 1px;
          position: absolute;
          width: 118px;
        }

        &::after {
          background: var(--border-color-secondary);
          bottom: 45%;
          right: 24px;
          content: "";
          height: 1px;
          position: absolute;
          width: 118px;
        }
      }
    }

    &__form {
      margin-top: 20px;
      margin-bottom: 20px;

      form {
        .form__forgot-password {
          a {
            text-decoration: none;
            transition: .4s;

            &:hover {
              text-decoration: underline;
              transition: .4s;
            }
          }
        }

        .input__password {
          margin-top: 12px;
        }
      }
    }

    &__sign-up {
      a {
        text-decoration: none;
        transition: .4s;

        &:hover {
          text-decoration: underline;
          transition: .4s;
        }
      }
    }
  }
}
</style>
