import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '../../images/icons/star.svg'
import { resetRating, submitRating } from '../../services/rating'
import PropTypes from 'prop-types'

Rating.propTypes = {
  category: PropTypes.string,
  activeRating: PropTypes.array,
  cookies: PropTypes.string
}

export default function Rating({ category, id, activeRating, cookies }) {
  const findCookieSession = activeRating
    .filter((rated) => rated.session_id === cookies)
    .map((rated) => rated.rating)
  const [rating, setRating] = useState(findCookieSession.length ? findCookieSession : 0)
  const [active, setActive] = useState(findCookieSession.length ? true : false)
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
  grid-column: 1/3;
  margin-bottom: 140px;
  text-align: center;
  display: inline-block;
  width: 100%;
`

const StarStyled = styled(Star)`
  height: 40px;
`

const IconButton = styled.button`
  border: none;
  fill: ${(props) => (props.marked ? 'var(--green)' : 'var(--lightgrey)')};
  stroke: var(--green);
  background: transparent;
  padding: 0;
  margin-right: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`

const ButtonStyled = styled.button`
  width: 100px;
  height: 40px;
  border: ${(props) => (props.inactive ? 'none' : '2px solid var(--green)')};
  color: var(--white);
  border-radius: 20px;
  background: ${(props) => (props.inactive ? '#CB4468' : 'var(--green)')};
  display: block;
  margin: 0 auto;
`
