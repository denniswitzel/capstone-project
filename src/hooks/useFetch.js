import { useEffect, useState } from 'react'

export default function useFetch(urlName) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://192.168.178.53:5000/${urlName}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Data could not be loaded. Error:', error)
      })
      // eslint-disable-next-line
  }, [urlName])

  return data.sort((a, b) => a.title.localeCompare(b.title))
}
