import React from 'react'
import ProductOverview from './components/Categories/Categories'
import { Switch, Route, useParams } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import useFetch from '../src/hooks/useFetch'
import { ReactComponent as Logo } from './images/icons/logo.svg'
import styled from 'styled-components'
import Headline from './components/Headline/Headline'
import Detailpage from './components/Detailpage/Detailpage'

export default function App() {
  const burgers = useFetch('burger')
  const kebabs = useFetch('kebab')
  const minced = useFetch('minced')
  const nuggets = useFetch('nuggets')
  const sausages = useFetch('sausages')
  const categories = useFetch('categories')

  return (
    <Switch>
      <Route exact path="/">
        <LogoStyled />
        {categories.map((category, index) => (
          <ProductOverview
            key={index}
            productIcon={category.icon}
            productName={category.name}
          />
        ))}
      </Route>
      <Route exact path="/burger">
        <Headline headline="Burger" />
        {burgers.map((burger, index) => (
          <ProductList
            title={burger.title}
            image={burger.image}
            key={index}
            id={burger.id}
            category={'burger'}
          />
        ))}
      </Route>
      <Route path={'/burger/:id'}>
        <Detailpage category={'burger'} />
      </Route>
      <Route exact path="/cold-cuts">
        <Headline headline="Cold-Cuts" />
        <SubheadlineStyled>Coming soon</SubheadlineStyled>
      </Route>
      <Route exact path="/kebab">
        <Headline headline="Kebab" />
        {kebabs.map((kebab, index) => (
          <ProductList
            title={kebab.title}
            image={kebab.image}
            key={index}
            id={kebab.id}
            category={'kebab'}
          />
        ))}
      </Route>
      <Route path={'/kebab/:id'}>
        <Detailpage category={'kebab'} />
      </Route>
      <Route exact path="/minced">
        <Headline headline="Minced" />
        {minced.map((minced, index) => (
          <ProductList
            title={minced.title}
            image={minced.image}
            key={index}
            id={minced.id}
            category={'minced'}
          />
        ))}
      </Route>
      <Route path={'/minced/:id'}>
        <Detailpage category={'minced'} />
      </Route>
      <Route exact path="/nuggets">
        <Headline headline="Nuggets" />
        {nuggets.map((nugget, index) => (
          <ProductList
            title={nugget.title}
            image={nugget.image}
            key={index}
            id={nugget.id}
            category={'nuggets'}
          />
        ))}
      </Route>
      <Route path={'/nuggets/:id'}>
        <Detailpage category={'nuggets'} />
      </Route>
      <Route exact path="/sausages">
        <Headline headline="Sausages" />
        {sausages.map((sausage, index) => (
          <ProductList
            title={sausage.title}
            image={sausage.image}
            key={index}
            id={sausage.id}
            category={'sausages'}
          />
        ))}
      </Route>
      <Route path={'/sausages/:id'}>
        <Detailpage category={'sausages'} />
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
