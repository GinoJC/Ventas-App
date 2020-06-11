import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import ContentCenter from './components/ContentCenter';
import NotFound from "./components/NotFound";

const App = () => (
	<BrowserRouter>
		<MainLayout>
			<Switch>
				<Route exact path="/" component={ContentCenter} />
				<Route component={NotFound} />
			</Switch>
		</MainLayout>
	</BrowserRouter>
);

export default App;
