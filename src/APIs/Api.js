import Config from './ApiConfig';
import { create } from 'apisauce'

// const headers = {
//   "Content-type": "application/x-www-form-urlencoded",
//   "Accept": "application/json"
// }

const Api = {

  getJSON(url, base) {

    const api = create({
      baseURL: Config.baseUrl,
      timeout: 30000
    })

    if(base) {
      api.setBaseURL(base)
    } 
    
    return new Promise((resolve, reject) => {
      api.get(url)
        .then(response => {
          console.log(response)
          if (response.ok) {
            resolve(response.data)
          } else {
            reject(response.data)
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  },

  // postJSON(url, params = {}) {

  //   return new Promise((resolve, reject) => {
  //     api.post(url, params)
  //       .then(response => {
  //         if (response.ok) {
  //           resolve(response.data)
  //         } else {
  //           reject(response.data)
  //         }
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       })
  //   })
  // }

}

export default Api