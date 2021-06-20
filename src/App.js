import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Rewards from "./pages/Rewards";
import GiftCard from "./pages/GiftCards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullGiftCard from "./pages/FullGiftCard";
import ScrollTop from "./components/ThirdParty/ScrollTop";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/SignUp";
import JoinNow from "./pages/JoinNow";
// import giftCardContent from "./components/giftcard/giftcardContent";

library.add(fab, faAngleDown);

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<ScrollTop>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/menu">
								<Menu />
							</Route>
							<Route exact path="/gift">
								<GiftCard />
							</Route>
							<Route path="/rewards">
								<Rewards />
							</Route>
							<Route path="/sign-in">
								<SignUp />
							</Route>
							<Route path="/join-now">
								<JoinNow />
							</Route>
							<Route exact path="/gift/:giftcard">
								<FullGiftCard />
							</Route>
						</Switch>
					</ScrollTop>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
