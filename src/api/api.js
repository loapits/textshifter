import * as axios from 'axios'


export const lsApi = {
  setItem(key, value) {
    localStorage.setItem(key, value)
  }
}