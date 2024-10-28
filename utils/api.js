// /utils/api.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/users', // Express伺服器的基底URL
  withCredentials: true, // 如果需要傳送cookie
})

export const getUsers = () => apiClient.get('/')
export const getUserById = (id) => apiClient.get(`/${id}`)
export const createUser = (data) => apiClient.post('/', data)
export const updateUserProfile = (id, data) => apiClient.put(`/${id}/profile`, data)
export const updateUserPassword = (id, data) => apiClient.put(`/${id}/password`, data)
export const deleteUser = (id) => apiClient.delete(`/${id}`)
export const uploadAvatar = (formData) =>
  apiClient.post('/upload-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
