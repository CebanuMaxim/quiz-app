import axios from 'axios'

export default axios.create({
  baseURL: 'https://quizproject-31-default-rtdb.europe-west1.firebasedatabase.app/'
})