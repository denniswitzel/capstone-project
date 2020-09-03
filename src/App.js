import React from 'react'
import ProductOverview from './components/ProductOverview/ProductOverview'
import { Switch, Route } from 'react-router-dom'
import Burger from './pages/Burger/Burger'
import Kebab from './pages/Kebab/Kebab'
import Minced from './pages/Minced/Minced'
import Nuggets from './pages/Nuggets/Nuggets'
import Sausages from './pages/Sausages/Sausages'
import { ReactComponent as Logo } from './images/icons/logo.svg'
import styled from 'styled-components'
import productCategories from '../src/mocks/category.json'

export default function App(){
    return(
            <Switch>
                <Route exact path="/"> 
                <LogoStyled />
                {productCategories.map((category, index) => 
                <ProductOverview key={index} productIcon={category.icon} productName={category.name}/>)}
                </Route>
                <Route path="/burger" component={Burger}/>
                <Route path="/kebab" component={Kebab}/>
                <Route path="/minced" component={Minced}/>
                <Route path="/nuggets" component={Nuggets}/>
                <Route path="/sausages" component={Sausages}/>
            </Switch>
    )
}

const LogoStyled = styled(Logo)`
    grid-column: 1/3;
    margin: 40px 0;
`