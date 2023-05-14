export default function ({ store, redirect, app}) {
  if (!store.state.auth.accessToken) {
    return redirect('/sign-in?dsadsa')
  }
}
