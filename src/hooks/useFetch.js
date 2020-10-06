import { useEffect, useState } from 'react'

export default function useFetch(urlName) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/denniswitzel/capstone-project/${urlName}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Data could not be loaded. Error:', error)
      })
      // eslint-disable-next-line
  }, [urlName])

  return data.sort((a, b) => a.title.localeCompare(b.title))
}
