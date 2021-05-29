import React, { useState } from "react";
import Home from "./Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faAngleDown);

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
