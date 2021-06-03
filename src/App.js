import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Rewards from "./pages/Rewards";
import GiftCard from "./pages/GiftCards";
import Footer from "./components/footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

library.add(fab, faAngleDown);

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/gift">
						<GiftCard />
					</Route>
					<Route path="/rewards">
						<Rewards />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
