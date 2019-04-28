import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				{/* basename for gh-pages */}
				<Router basename="/React/">
					<NavigationBar />
					<Jumbotron />
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route component={NoMatch} />
						</Switch>
					</Layout>
				</Router>
			</React.Fragment>
		);
	}
}
export default App;
