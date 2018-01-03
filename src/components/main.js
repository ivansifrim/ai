import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './list/list'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={List}/>
		</Switch>
	</main>
)

export default Main
