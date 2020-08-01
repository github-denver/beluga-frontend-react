import axios from './axios'

export const login = ({ id, password }) => axios.post('/api/login', { id, password })

export const register = ({ id, name, password }) => axios.post('/api/register', { id, name, password })

export const check = (token) => {
  return axios.get('/api/me', {
    params: {
      accessToken: token
    }
  })
}

export const logout = () => axios.get('/api/logout')
