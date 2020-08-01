import axios from './axios'

export const list = ({ category, number }) => {
  return axios.get(`/api/beluga/${category}/list/:${number}`)
}
