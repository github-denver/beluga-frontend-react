import axios from './axios'

export const listDescription = ({ category, number }) => {
  return axios.get(`/api/beluga/board/${category}/list/${number}`)
}

export const listInformation = ({ category, number }) => {
  return axios.get(`/api/beluga/information/${category}/list/${number}`)
}
