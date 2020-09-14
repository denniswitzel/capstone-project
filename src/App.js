import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import useFetch from '../src/hooks/useFetch'
import ProductOverview from './components/Categories/Categories'
import Detailpage from './components/Detailpage/Detailpage'
import ProductList from './components/ProductList/ProductList'
import { ReactComponent as Logo } from './images/icons/logo.svg'

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
        {categories.map((category) => (
          <ProductOverview
            key={category.id}
            productIcon={category.icon}
            productName={category.name}
          />
        ))}
      </Route>
      <Route exact path="/burger">
        <ProductList
          headline={'Burger'}
          product={burgers}
          category={'burger'}
        />
      </Route>
      <Route path={'/burger/:id'}>
        <Detailpage category={'burger'} />
      </Route>
      <Route exact path="/cold-cuts">
        <ProductList
          headline={'Cold-Cuts'}
          product={burgers}
          category={'burger'}
        />
      </Route>
      <Route exact path="/kebab">
        <ProductList headline={'Kebab'} product={kebabs} category={'kebab'} />
      </Route>
      <Route path={'/kebab/:id'}>
        <Detailpage category={'kebab'} />
      </Route>
      <Route exact path="/minced">
        <ProductList headline={'Minced'} product={minced} category={'minced'} />
      </Route>
      <Route path={'/minced/:id'}>
        <Detailpage category={'minced'} />
      </Route>
      <Route exact path="/nuggets">
        <ProductList
          headline={'Nuggets'}
          product={nuggets}
          category={'nuggets'}
        />
      </Route>
      <Route path={'/nuggets/:id'}>
        <Detailpage category={'nuggets'} />
      </Route>
      <Route exact path="/sausages">
        <ProductList
          headline={'Sausages'}
          product={sausages}
          category={'sausages'}
        />
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
