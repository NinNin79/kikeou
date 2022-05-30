import React from "react"

import Card from "../card"

const Factory = ({ elementsTree }) => (
	<>
		<Card element={elementsTree.element} child={elementsTree.element.child} />
	</>
)

export default Factory
