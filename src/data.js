import axios from 'axios'

export const data = getData()

function getData() {
  const data = []
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res) => data.unshift(...res.data))
  return data
}
