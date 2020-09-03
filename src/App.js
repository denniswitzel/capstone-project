import React from 'react'
import ProductOverview from './components/Categories/Categories'
import { Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import burgers from './mocks/burger.json'
import kebabs from './mocks/kebab.json'
import minced from './mocks/minced.json'
import nuggets from './mocks/nuggets.json'
import sausages from './mocks/sausages.json'
import productCategories from './mocks/category.json'
import { ReactComponent as Logo } from './images/icons/logo.svg'
import styled from 'styled-components'
import Headline from './components/Headline/Headline'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LogoStyled />
        {productCategories.map((category, index) => (
          <ProductOverview
            key={index}
            productIcon={category.icon}
            productName={category.name}
          />
        ))}
      </Route>
      <Route path="/burger">
        <>
          <Headline headline="Burger" />
          {burgers.map((burger, index) => (
            <ProductList
              title={burger.title}
              image={burger.image}
              key={index}
            />
          ))}
        </>
      </Route>
      <Route path="/cold-cuts">
        <>
          <Headline headline="Cold-Cuts" />
          <SubheadlineStyled>Coming soon</SubheadlineStyled>
        </>
      </Route>
      <Route path="/kebab">
        <>
          <Headline headline="Kebab" />
          {kebabs.map((kebab, index) => (
            <ProductList title={kebab.title} image={kebab.image} key={index} />
          ))}
        </>
      </Route>
      <Route path="/minced">
        <>
          <Headline headline="Minced" />
          {minced.map((minced, index) => (
            <ProductList
              title={minced.title}
              image={minced.image}
              key={index}
            />
          ))}
        </>
      </Route>
      <Route path="/nuggets">
        <>
          <Headline headline="Nuggets" />
          {nuggets.map((nugget, index) => (
            <ProductList
              title={nugget.title}
              image={nugget.image}
              key={index}
            />
          ))}
        </>
      </Route>
      <Route path="/sausages">
        <>
          <Headline headline="Sausages" />
          {sausages.map((sausage, index) => (
            <ProductList
              title={sausage.title}
              image={sausage.image}
              key={index}
            />
          ))}
        </>
      </Route>
    </Switch>
  )
}

const LogoStyled = styled(Logo)`
  grid-column: 1/3;
  margin: 40px 0;
`
const SubheadlineStyled = styled.h3`
  color: #4bdb80;
  margin: 100px 0 0 0px;
  text-align: center;
  grid-column: 1/3;
`
