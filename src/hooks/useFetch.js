import { useEffect, useState } from 'react'
const fetch = require('node-fetch');

export default function useFetch(urlName) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/${urlName}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Data could not be loaded. Error:', error)
      })
  }, [urlName])

  return data.sort((a, b) => a.title.localeCompare(b.title))
}
