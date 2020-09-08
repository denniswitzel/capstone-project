import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Gluten } from '../../images/icons/gluten.svg'
import { ReactComponent as Soy } from '../../images/icons/soy.svg'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { useHistory, useParams } from 'react-router-dom'

export default function Detailpage({ category }) {
  let { id } = useParams()
  useEffect(() => {
    fetchDetail()
  }, [])

  const [detail, setDetail] = useState({
    allergies: [],
  })

  const fetchDetail = async () => {
    const fetchDetail = await fetch(`http://localhost:4000/${category}/${id}`)
    const detail = await fetchDetail.json()
    setDetail(detail)
  }

  let history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <>
      <ImageSection>
        <ArrowStyled onClick={handleClick} />
        <ProductName>{detail.title}</ProductName>
        <ProductImage src={detail.image} />
      </ImageSection>
      <ProductInformation>
        <Headline>Ingredients</Headline>
        <IngredientsList>{detail.ingredients}</IngredientsList>
        {detail.allergies.length ? (
          <Headline>Allergies</Headline>
        ) : (
          <Headline></Headline>
        )}
        {detail.allergies.map((allergy, index) => (
          <AllergyContainer key={index}>
            {allergy === 'Gluten' ? <Gluten /> : <Soy />}
            <Allergies>{allergy}</Allergies>
          </AllergyContainer>
        ))}
      </ProductInformation>
    </>
  )
}

const ImageSection = styled.section`
  display: flex;
  background: linear-gradient(
    45deg,
    rgba(75, 219, 164, 1) 0%,
    rgba(75, 219, 128, 1) 100%
  );
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
  grid-column: 1/3;
`
const ProductName = styled.h2`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  color: white;
  margin: 100px 20px 30px 30px;
  width: 40vw;
`

const ProductImage = styled.img`
  height: 180px;
  text-align: center;
  -webkit-filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  position: relative;
  top: 80px;
  right: 30px;
  margin-left: 20px;
`
const ProductInformation = styled.section`
  padding: 80px 50px 20px 50px;
  grid-column: 1/3;
  width: 100%;
  text-align: left;
`
const Headline = styled.h3`
  color: #8e9091;
  grid-column: 1/3;
  width: 100%;
  text-align: left;
  font-size: 18px;
  margin: 0;
`
const IngredientsList = styled.p`
  display: inline-block;
  grid-column: 1/3;
  color: #8e9091;
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  text-align: left;
  max-width: 450px;
  margin: 10px 0 40px 0;
`

const AllergyContainer = styled.div`
  float: left;
  margin: 15px 30px 0 0;
  text-align: center;

  svg {
    height: 45px;
  }
`

const Allergies = styled.p`
  color: #8e9091;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  margin: 0;
`
const ArrowStyled = styled(Arrow)`
  fill: #ffffff;
  position: absolute;
  left: 30px;
  margin-top: 30px;
  cursor: pointer;
`
