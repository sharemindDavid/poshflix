import React from "react";
import { Tr, Td } from "./Item.styled";

function Item({ genre, title, createdDate, user, doneStatus }) {
	return (
		<Tr>
			<Td>{genre}</Td>
			<Td>{title}</Td>
			<Td>{new Date(createdDate).toLocaleDateString()}</Td>
			<Td>{user}</Td>
			<Td>{doneStatus}</Td>
		</Tr>
	);
}

export default Item;
