import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Details from "./components/Details";

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Router>
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/details/:id" component={Details} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
