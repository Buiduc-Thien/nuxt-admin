
export default function sendDataToServer($axios, userProfile) {
  return $axios.$post('/login/google', userProfile)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error)
      throw error;
    });
}
