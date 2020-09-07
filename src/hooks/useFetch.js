import { useEffect, useState } from 'react'

export default function useFetch(urlName) {
  const [data, setData] = useState(
    [].sort((a, b) => a.title.localeCompare(b.title))
  )

  useEffect(() => {
    fetch(`http://localhost:4000/${urlName}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Data could not be loaded. Error:', error)
      })
  }, [urlName])

  return data
}
