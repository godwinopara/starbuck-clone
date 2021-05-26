import Home from "./Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import footerText from "./App-text/footerLinks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faAngleDown);

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Footer footerLinks={footerText} />
		</div>
	);
}

export default App;
