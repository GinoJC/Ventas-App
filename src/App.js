import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import ContentCenter from './components/ContentCenter';
import NotFound from "./components/NotFound";
import Article from "./components/Article";

const App = () => (
	<BrowserRouter>
		<MainLayout>
			<Switch>
				<Route exact path="/" component={ContentCenter} />
				<Route exact path="/art/:id" component={Article} />
				<Route component={NotFound} />
			</Switch>
		</MainLayout>
	</BrowserRouter>
);

export default App;
