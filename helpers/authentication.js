
export function sendDataToServer($axios, userProfile) {
  return $axios.$post('/login/firebase', userProfile)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error)
      throw error;
    });
}

export function fetchUserProfile($axios) {
  return $axios.$post('/profile')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('accessToken')
        console.log('Login token has expired, removed token from localStorage successfully')
      }
    });
}
