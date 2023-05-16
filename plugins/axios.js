export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    const accessToken = store.state.auth.accessToken.accessToken;
      if (accessToken) {
      config.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  });
}
