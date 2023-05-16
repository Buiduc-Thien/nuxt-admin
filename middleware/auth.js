
export default function ({ store, redirect}) {
  const accessToken = store.state.auth.accessToken
  if (!accessToken) {
    this.$toast.error('Vui lòng đăng nhập trước!');
    return redirect('/sign-in')
  }
}
