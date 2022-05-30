// const LinkedList = [
// 	{
// 		id: "myId",
// 		parentId: "myParentId",
// 		title: "My title",
// 		content: "- free content",
// 		color: "blue",
// 	},
// ]

const addElement = (list, element) => {
	list.push(element)
}

const removeElement = (list, elementId) =>
	list.filter((e) => e.id !== elementId)
