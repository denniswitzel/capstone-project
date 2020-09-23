import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '../../images/icons/star.svg'

export default function Rating({
  category,
  id,
  activeRating,
  numberOfRatings,
}) {

    const localStorageData = loadLocally('rating')?.filter((product) => product.id === id) ?? []
    const [rating, setRating] = useState(localStorageData[0]?.rating ?? 0)
    const [active, setActive] = useState(localStorageData[0]?.active ?? false)
    const [localRating, setLocalRating] = useState(loadLocally('rating') ?? [])
    
    useEffect(() => {
        saveLocally('rating', localRating)
      }, [localRating])

  return (
    <RatingSection>
      {[...Array(5)].map((_, index) => (
        <IconButton
          key={index}
          onClick={() => setRating(index + 1)}
          marked={index + 1 <= rating}
          type="button"
          disabled={active}
        >
          <StarStyled />
        </IconButton>
      ))}
      {!active ? (
        <ButtonStyled inactive={active} onClick={() => {submitRating()}}>
          Set rating
        </ButtonStyled>
      ) : (
        <ButtonStyled inactive={active} onClick={() => resetRating()}>
          Change rating
        </ButtonStyled>
      )}
    </RatingSection>
  )

  function submitRating() {
    setActive(!active)
    fetch(`http://localhost:5000/${category}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        rating: activeRating + rating,
        numberOfRatings: numberOfRatings + 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((err) => 'Error' + err)
      setActive(!active)
      setLocalRating([...localRating, {id, rating, active: true}])
  }

  function resetRating() {
    setActive(!active)
    fetch(`http://localhost:5000/${category}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        rating: activeRating - rating,
        numberOfRatings: numberOfRatings - 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((err) => 'Error' + err)
    setRating(1)
  }

  function saveLocally(key, arrayOfObjects) {
    localStorage.setItem(key, JSON.stringify(arrayOfObjects))
  }


  function loadLocally(key) {
    try {
      const jsonString = localStorage.getItem(key)
      return JSON.parse(jsonString)
    } catch (error) {
      console.log(error)
    }
  }
}

const RatingSection = styled.section`
  display: inline-block;
  margin-bottom: 140px;
  text-align: center;
`

const StarStyled = styled(Star)`
  height: 40px;
`

const IconButton = styled.button`
  border: none;
  fill: ${(props) => (props.marked ? '#4BDB80' : '#F4F4F4')};
  stroke: #4bdb80;
  background: transparent;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`

const ButtonStyled = styled.button`
  width: 100px;
  height: 40px;
  border: ${(props) => (props.inactive ? 'none' : '2px solid #4BDB80')};
  color: #ffffff;
  border-radius: 20px;
  background: ${(props) => (props.inactive ? '#CB4468' : '#4BDB80')};
`
