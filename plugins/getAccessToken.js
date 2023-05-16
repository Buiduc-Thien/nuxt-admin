export default function ({store}) {
  if (process.client) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      store.dispatch('auth/getAccessTokenLocalStorage', accessToken);
      store.dispatch('auth/fetchUserProfile')
    }
  }
}
