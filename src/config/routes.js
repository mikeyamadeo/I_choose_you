import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../App'
import SelectPokemon from '../App/Views/SelectPokemon'

var routes = (
  <Route handler={App} >
    <DefaultRoute handler={SelectPokemon} />
    <Route name='SelectPokemon' path='/start' handler={SelectPokemon}/>
  </Route>
)

export default routes