import React from 'react'
import ProductDetail from './ProductDetail'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { ReactComponent as Gluten } from '../../images/icons/gluten.svg'
import { ReactComponent as Heart } from '../../images/icons/heart.svg'
import { ReactComponent as Soy } from '../../images/icons/soy.svg'
import { MemoryRouter } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

export default {
  title: 'Pages/Detail Page',
  component: ProductDetail
}

const product = [
  {
    _id: {
        $oid: "5f69da225a5cfd8e0cd97447"
    },
    id: 1,
    category: "burger",
    title: "amidori - veggie best burger",
    ingredients: "Wasser, Erbsenproteinisolat 17 %, Zwiebelwürfel, Rapsöl, Kokosfett, Branntweinessig, Verdickungsmittel Methylcellulose, Tomatenmark, Apfelessig, Malzextrakt (Wasser, glutenfreies GERSTENRÖSTMALZ, Hopfen, Hefe), Citrusfaser, Erbsenfaser, glutenfreies HAFERVOLLKORNMEHL, Kartoffelstärke, Gewürze, Speisesalz, färbendes Frucht- und Gemüsekonzentrat (Hibiskus, Karotte, rote Bete), Hefeextrakt, natürliches Aroma, Antioxidationsmittel: Extrakt aus Rosmarin, Rauch",
    allergies: ["gluten"],
    image: "https://raw.githubusercontent.com/denniswitzel/capstone-project/master/src/images/burger/Amidori-Veggie-Best-Burger.png",
    rating: [{
        session_id: "4994",
        rating: 3
    }, {
        session_id: "1234",
        rating: 4
    }, {
        session_id: "1235",
        rating: 3
    }, {
        session_id: "1236",
        rating: 5
    }]
}]

const cookies = "5638"
const activeRating = [{rating: 1}, {rating: 2}]

const Template = () => (  
<MemoryRouter>
    {product?.map((productItem) => (
    <DetailWrapper key={productItem.id}>
      <ColoredBackground>
        <ArrowStyled />
        <ProductName>{productItem.title}</ProductName>
      </ColoredBackground>
      <ImageWrapper>
        <ProductImage src={productItem.image} alt={productItem.title} />
        <HeartStyled/>
      </ImageWrapper>
      <ProductInformation>
        <Headline>Ingredients</Headline>
        <IngredientsList>{productItem.ingredients}</IngredientsList>
        {productItem.allergies?.length ? (
          <Headline>Allergies</Headline>
        ) : (
          <Headline></Headline>
        )}
        {productItem.allergies?.map((allergy, index) => (
          <AllergyContainer key={index}>
            {allergy === 'gluten' ? <Gluten /> : <Soy />}
            <Allergies>{allergy}</Allergies>
          </AllergyContainer>
        ))}
        <Rating
          category={productItem.category}
          id={productItem._id}
          activeRating={productItem.rating}
          numberOfRatings={productItem.numberOfRatings}
          cookies={cookies}
        />
      </ProductInformation>
    </DetailWrapper>
    ))}
  </MemoryRouter>)

const RatingProducts = () => (  
  <MemoryRouter>
  <Rating category={product.category} activeRating={activeRating} cookies={cookies} />
  </MemoryRouter>
)

  const DetailWrapper = styled.section`
  grid-column: 1/3;
  max-width: 500px;
`

const ColoredBackground = styled.section`
  display: flex;
  background: linear-gradient(45deg, var(--turquoise), var(--green));
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  grid-column: 1/3;
`
const ProductName = styled.h2`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  color: var(--white);
  margin: 100px 20px 30px 40px;
  width: 100px;
`

const ProductImage = styled.img`
  max-width: 180px;
  text-align: center;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  margin: -120px 30px 0 20px;
`
const ProductInformation = styled.section`
  padding: 80px 50px 20px 50px;
  grid-column: 1/3;
  width: 100%;
  text-align: left;
`
const Headline = styled.h3`
  color: var(--grey);
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
  margin: 15px 30px 30px 0;
  text-align: center;

  svg {
    height: 45px;
  }
`

const Allergies = styled.p`
  color: var(--grey);
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  margin: 0;
  text-transform: capitalize;
`
const ArrowStyled = styled(Arrow)`
  fill: var(--white);
  position: relative;
  left: 10%;
  margin-top: 30px;
  cursor: pointer;
`

const ImageWrapper = styled.section`
  float: right;
  position: relative;
`

const HeartStyled = styled(Heart)`
  width: 40px;
  stroke: var(--green);
  fill: ${({ favored }) => (favored ? 'var(--green)' : 'var(--lightgrey)')};
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  position: absolute;
  right: 95px;
  -webkit-tap-highlight-color: transparent;
`

export const completeProduct = Template.bind({})

export const rating = RatingProducts.bind({})
