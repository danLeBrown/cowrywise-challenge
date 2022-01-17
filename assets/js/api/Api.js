/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import axios from 'axios'
const Api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID HmKcILmSi7TU82_LDWgvxLrfYsfkTSomAWf4qqaug88',
  },
})
Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Api.defaults.headers.common['Accept-Version'] = 'v1'
export default Api
