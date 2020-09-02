import React from 'react'
import ProductOverview from './components/ProductOverview/ProductOverview'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Burger from './components/Burger/Burger'
import Kebab from './components/Kebab/Kebab'
import Minced from './components/Minced/Minced'
import Nuggets from './components/Nuggets/Nuggets'
import Sausages from './components/Sausages/Sausages'
import { ReactComponent as Logo } from './images/icons/logo.svg'
import styled from 'styled-components'
import Headline from './components/Headline/Headline'

export default function App() {
    const productCategories = [{
        name: "BURGER",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/burger.svg"
    },
    {
        name: "COLD CUTS",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/717acadfd943ecc6bfc7f09650784cf00ff22b44/src/images/icons/coldcuts.svg"
    },
    {
        name: "KEBAB",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/kebab.svg"
    },
    {
        name: "MINCED",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/minced.svg"
    },
    {
        name: "NUGGETS",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/f892d3d147b3c573a796dcb1a34298351806d8b5/src/images/icons/nuggets.svg"
    },
    {
        name: "SAUSAGES",
        icon: "https://raw.githubusercontent.com/denniswitzel/capstone-project/67e1d46d4c80dc548f311f8b10cb5d5c61960c60/src/images/icons/sausage.svg"
    }
]

    return(
         <Router>
            <Switch>
                <Route exact path="/"> 
                <LogoStyled />
                {productCategories.map((category) => 
                <ProductOverview productIcon={category.icon} productName={category.name}/>)}
                </Route>
                <Route path="/burger" component={Burger}/>
                <Route path="/kebab" component={Kebab}/>
                <Route path="/minced" component={Minced}/>
                <Route path="/nuggets" component={Nuggets}/>
                <Route path="/sausages" component={Sausages}/>
            </Switch>
        </Router>
    )
}

const LogoStyled = styled(Logo)`
    grid-column: 1/3;
    margin: 40px 0;
`