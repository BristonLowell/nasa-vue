import { api } from './AxiosService'
import { AppState } from '../AppState'

class ApodService {
  async getApod(date) {
    try {
      const res = await api.get('apod?api_key=Bf3t1CcqnJqLLn6mYkuL3PFLQGZQQY9s6aYAza00&date=' + date)
      AppState.apod = res.data
    } catch (error) {
      console.log(error)
    }
  }
}

export const apodService = new ApodService()
