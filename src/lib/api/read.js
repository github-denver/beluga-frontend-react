import axios from './axios'

export const readDescription = ({ category, number }) => {
  return axios.get(`/api/beluga/board/${category}/read/${number}`)
}

export const readInformation = ({ category, number }) => {
  return axios.get(`/api/beluga/board/information/${category}/read/${number}`)
}
