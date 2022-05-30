import React from "react"
import Factory from "./components/factory"
import "./App.css"

const tree = {
	element: {
		id: "myId",
		parentId: "myParentId",
		title: "My title",
		content: "- free content",
		color: "blue",
		Child: {
			element: {
				id: "myIdChild",
				parentId: "myParentIdChild",
				title: "My titleChild",
				content: "- free content Child",
				color: "blue",
				Child: {},
			},
		},
	},
}
function App() {
	return (
		<div className="App">
			<Factory elementsTree={tree} />
		</div>
	)
}

export default App
