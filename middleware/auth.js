export default function ({ store, redirect }) {
  if (process.client && !store.state.auth.loggedIn) return redirect("/login");
}
