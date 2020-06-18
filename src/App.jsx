import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import ContentCenter from './components/ContentCenter';
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import NotFound from "./components/NotFound";
import Article from "./components/Article";

function App() {

	return(
		<BrowserRouter>
			<MainLayout>
				<Switch>
					<Route exact path="/" component={ContentCenter} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/register" component={RegisterForm} />
					<Route exact path="/art/:id" component={Article} />
					<Route component={NotFound} />
				</Switch>
			</MainLayout>
		</BrowserRouter>
	)
};

export default App;