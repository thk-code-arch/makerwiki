export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
if (process.browser) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.access_token) {
    $axios.setHeader('Authorization', "Bearer " + user.access_token)
    }
    }
    })
 

    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }