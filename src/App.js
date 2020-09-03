import React from 'react'
import ProductOverview from './components/Categories/Categories'
import { Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import {
  burgerList,
  kebabList,
  mincedList,
  nuggetsList,
  sausagesList,
} from './utils/sortArrays'
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
          {burgerList.map((burger, index) => (
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
          {kebabList.map((kebab, index) => (
            <ProductList title={kebab.title} image={kebab.image} key={index} />
          ))}
        </>
      </Route>
      <Route path="/minced">
        <>
          <Headline headline="Minced" />
          {mincedList.map((minced, index) => (
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
          {nuggetsList.map((nugget, index) => (
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
          {sausagesList.map((sausage, index) => (
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
