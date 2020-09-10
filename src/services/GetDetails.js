import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetDetails(category) {
  const { id } = useParams()
  useEffect(() => {
    fetchDetail()
    // eslint-disable-next-line
  }, [])

  const [detail, setDetail] = useState({
    allergies: [],
  })

  const fetchDetail = async () => {
    const fetchDetail = await fetch(`http://localhost:4000/${category}/${id}`)
    const detail = await fetchDetail.json()
    setDetail(detail)
  }
  return detail
}
