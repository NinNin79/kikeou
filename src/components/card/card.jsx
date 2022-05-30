import React from "react"
import PropTypes from "prop-types"
import "./card.scss"

const Card = ({ element, child }) => (
	<div id={element.id} className="container">
		<div className="title">{element.title}</div>
		<div>{element.content}</div>
		<div>{child}</div>
	</div>
)

Card.defaultProps = {
	element: {
		id: "myId",
		parentId: "myParentId",
		title: "My title",
		content: "- free content",
		color: "blue",
	},
	child: (
		<>
			<Card
				element={{
					id: "myId",
					parentId: "myParentId",
					title: "My title",
					content: "- free content",
					color: "blue",
				}}
			/>
			<Card
				element={{
					id: "myId",
					parentId: "myParentId",
					title: "My title",
					content: "- free content",
					color: "blue",
				}}
			/>
		</>
	),
}
Card.propTypes = {
	element: PropTypes.shape({
		id: PropTypes.string,
		parentId: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.string,
	}),
}

export default Card
