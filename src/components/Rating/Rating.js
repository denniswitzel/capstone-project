import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '../../images/icons/star.svg'
import { resetRating, submitRating } from '../../services/rating'

export default function Rating({ category, id, activeRating, cookies }) {
  const findSession = activeRating
  .filter(rated => rated.session_id === cookies)
  .map(rated => rated.rating)
  const [rating, setRating] = useState(findSession.length ? findSession : 0)
  const [active, setActive] = useState(findSession.length ? true : false)
  const [responseData, setResponseData] = useState(activeRating)

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
        <ButtonStyled
          inactive={active}
          onClick={() =>
            submitRating(
              category,
              id,
              responseData,
              rating,
              setResponseData,
              setActive,
              active,
              cookies
            )
          }
        >
          Set rating
        </ButtonStyled>
      ) : (
        <ButtonStyled
          inactive={active}
          onClick={() =>
            resetRating(
              category,
              id,
              responseData,
              setResponseData,
              rating,
              setActive,
              active
            )
          }
        >
          Change rating
        </ButtonStyled>
      )}
    </RatingSection>
  )
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
